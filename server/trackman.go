package models

import (
	"net/http"
	"os/exec"

	"github.com/elgs/gosqljson"
	"github.com/gin-gonic/gin"
)

func CreateTrackmanTable() {
	cmd := exec.Command("docker", "cp", "data/trackman.csv", "clubhouseDb:/var/lib/mysql-files/trackman.csv")
	if err := cmd.Run(); err != nil {
		panic(err)
	}
	query := `DROP TABLE if exists trackman;`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE trackman (lastname VARCHAR(50), firstname VARCHAR(50));`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `LOAD DATA INFILE '/var/lib/mysql-files/trackman.csv' INTO TABLE players FIELDS TERMINATED BY ',' 
			LINES TERMINATED BY '\n' IGNORE 1 ROWS (lastname, firstname);`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
}

func GetTrackmanData(c *gin.Context) {
	_, data, err := gosqljson.QueryDbToArray(db, "lower", "SELECT * from trackman;")
	if err != nil {
		panic(err)
	}

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": data})
}
