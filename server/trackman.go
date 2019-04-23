package models

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os/exec"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateTrackmanTable() {
	query := `SELECT * from trackman limit 1;`
	if _, err := db.Exec(query); err != nil {
		files, err := ioutil.ReadDir("data/trackman")
		if err != nil {
			log.Fatal(err)
		}
		query = `CREATE TABLE trackman (PitchNo INT, Date VARCHAR(25), Time VARCHAR(25), PAofInning INT, PitchofPA INT, Pitcher VARCHAR(250),
				PitcherId INT, PitcherThrows VARCHAR(10), PitcherTeam VARCHAR(10), Batter VARCHAR(250), BatterId INT, BatterSide VARCHAR(10),
				BatterTeam VARCHAR(10), PitcherSet VARCHAR(25), Inning INT, ToporBottom VARCHAR(10), Outs INT, Balls INT, Strikes INT,
				TaggedPitchType VARCHAR(25), AutoPitchType VARCHAR(25), PitchCall VARCHAR(25), KorBB VARCHAR(25), HitType VARCHAR(25),
				PlayResult VARCHAR(25), OutsOnPlay INT, RunsScored INT, Notes VARCHAR(500), RelSpeed VARCHAR(25), VertRelAngle VARCHAR(25), HorzRelAngle VARCHAR(25),
				SpinRate VARCHAR(25), SpinAxis VARCHAR(25), Tilt VARCHAR(10), RelHeight VARCHAR(25), RelSide VARCHAR(25), Extension	VARCHAR(25), VertBreak VARCHAR(25),
				InducedVertBreak VARCHAR(25), HorzBreak VARCHAR(25), PlateLocHeight VARCHAR(25), PlateLocSide VARCHAR(25), ZoneSpeed VARCHAR(25), VertApprAngle VARCHAR(25),
				HorzApprAngle VARCHAR(25), ZoneTime VARCHAR(25), ExitSpeed VARCHAR(25), Angle VARCHAR(25), Direction VARCHAR(25), HitSpinRate VARCHAR(25), PositionAt110X VARCHAR(25),
				PositionAt110Y VARCHAR(25), PositionAt110Z VARCHAR(25), Distance VARCHAR(25), LastTrackedDistance VARCHAR(25), Bearing VARCHAR(25), HangTime VARCHAR(25), pfxx VARCHAR(25),
				pfxz VARCHAR(25), x0 VARCHAR(25), y0 VARCHAR(25), z0 VARCHAR(25), vx0 VARCHAR(25), vy0 VARCHAR(25), vz0 VARCHAR(25), ax0 VARCHAR(25), ay0 VARCHAR(25), az0 VARCHAR(25), HomeTeam VARCHAR(10),
				AwayTeam VARCHAR(10), Stadium VARCHAR(50), Level VARCHAR(10), League VARCHAR(15), GameID VARCHAR(50), PitchUID VARCHAR(50));`
		if _, err := db.Exec(query); err != nil {
			log.Fatal(err)
		}
		for _, f := range files {
			srcName := fmt.Sprintf("data/trackman/%s", f.Name())
			dstName := fmt.Sprintf("/var/lib/mysql-files/%s", f.Name())
			fmt.Println(srcName)
			cmd := exec.Command("docker", "cp", srcName, "clubhouseDb:"+dstName)
			if err := cmd.Run(); err != nil {
				log.Fatal(err)
			}
			query := fmt.Sprintf(`LOAD DATA INFILE '%s' INTO TABLE trackman FIELDS TERMINATED BY ','
				ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;`, dstName)
			fmt.Println(query)
			if _, err := db.Exec(query); err != nil {
				log.Fatal(err)
			}
		}
	}
}

func GetBatterData(c *gin.Context) {
	data := make(map[string]interface{})
	for _, side := range []string{"Right", "Left"} {
		query := fmt.Sprintf(`SELECT Batter, COUNT(PlayResult) from trackman where PitcherThrows='%s' 
								and NOT PlayResult='Undefined' and BatterTeam='CAL_BEA' group by Batter`, side)
		rows, err := db.Query(query)
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		atbats := make(map[string]int)
		var count int
		var name string
		for rows.Next() {
			err := rows.Scan(&name, &count)
			if err != nil {
				log.Fatal(err)
			}
			atbats[name] += count
		}

		query = fmt.Sprintf(`SELECT Batter, COUNT(KorBB) from trackman where PitcherThrows='%s' 
								and KorBB='Strikeout' and BatterTeam='CAL_BEA' group by Batter`, side)
		rows, err = db.Query(query)
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		for rows.Next() {
			err := rows.Scan(&name, &count)
			if err != nil {
				log.Fatal(err)
			}
			atbats[name] += count
		}

		query = fmt.Sprintf(`SELECT Batter, COUNT(PlayResult) from trackman where PitcherThrows='%s' 
								and (PlayResult='Single' or PlayResult='Double' or PlayResult='Triple' or PlayResult='HomeRun') 
								and BatterTeam='CAL_BEA' group by Batter`, side)
		rows, err = db.Query(query)
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		stats := make(map[string][]string)
		for rows.Next() {
			err := rows.Scan(&name, &count)
			if err != nil {
				log.Fatal(err)
			}
			stats[name] = []string{strconv.Itoa(count), strconv.Itoa(atbats[name]), fmt.Sprintf("%.3f", float32(count)/float32(atbats[name]))}
		}
		data[side] = stats
	}
	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": data})
}

// data for find best pitcher
// // query all data with a Cal pitcher
// query := "SELECT DISTINCT PitcherId from trackman where PitcherTeam='CAL_BEA'"
// rows, err := db.Query(query)
// if err != nil {
// 	log.Fatal(err)
// }
// defer rows.Close()

// var pitcherId int
// for rows.Next() {
// 	err := rows.Scan(&pitcherId)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	log.Println(pitcherId)
// 	query = fmt.Sprintf("SELECT * from trackman where PitcherId=%d", pitcherId)
// 	rows, err := db.Query(query)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	for rows.Next() {
// 		err := rows.Scan()
// 		if err != nil {
// 			log.Fatal(err)
// 		}
// 	}

// }
