package models

import (
	"net/http"
	"os/exec"

	"github.com/elgs/gosqljson"
	"github.com/gin-gonic/gin"
)

type Game struct {
}

func CreateScheduleTable() {
	cmd := exec.Command("docker", "cp", "data/schedule.csv", "clubhouseDb:/var/lib/mysql-files/schedule.csv")
	if err := cmd.Run(); err != nil {
		panic(err)
	}
	query := `DROP TABLE if exists schedule;`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE schedule (lastname VARCHAR(50), firstname VARCHAR(50));`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `LOAD DATA INFILE '/var/lib/mysql-files/schedule.csv' INTO TABLE schedule FIELDS TERMINATED BY ',' 
			LINES TERMINATED BY '\n' IGNORE 1 ROWS (lastname, firstname);`
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
