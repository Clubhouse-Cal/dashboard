package models

import (
	"net/http"
	"os/exec"

	"github.com/elgs/gosqljson"
	"github.com/gin-gonic/gin"
)

func CreateScheduleTable() {
	cmd := exec.Command("docker", "cp", "data/schedule.csv", "clubhouseDb:/var/lib/mysql-files/schedule.csv")
	if err := cmd.Run(); err != nil {
		panic(err)
	}
	query := `DROP TABLE if exists schedule;`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE schedule (date VARCHAR(50), opponent VARCHAR(100), homeawayneutral VARCHAR(1), 
			calrunsscored INT, opponentrunsscored INT);`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `LOAD DATA INFILE '/var/lib/mysql-files/schedule.csv' INTO TABLE schedule FIELDS TERMINATED BY ',' 
			LINES TERMINATED BY '\n' IGNORE 1 ROWS;`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
}

func GetSchedule(c *gin.Context) {
	_, data, err := gosqljson.QueryDbToArray(db, "lower", "SELECT * from schedule;")
	if err != nil {
		panic(err)
	}

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": data})
}
