package models

import (
	"net/http"
	"os/exec"

	"github.com/elgs/gosqljson"
	"github.com/gin-gonic/gin"
)

func CreatePlayerTable() {
	cmd := exec.Command("docker", "cp", "data/players.csv", "clubhouseDb:/var/lib/mysql-files/players.csv")
	if err := cmd.Run(); err != nil {
		panic(err)
	}
	query := `DROP TABLE if exists players;`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE players (number INT, lastname VARCHAR(50), firstname VARCHAR(50), position VARCHAR(50), 
			height VARCHAR(50), weight INT, year VARCHAR(50), hometown VARCHAR(250));`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `LOAD DATA INFILE '/var/lib/mysql-files/players.csv' INTO TABLE players FIELDS TERMINATED BY ',' 
			LINES TERMINATED BY '\n' IGNORE 1 ROWS (number, lastname, firstname, position, height, weight, year, hometown);`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
}

func GetPlayers(c *gin.Context) {
	_, data, err := gosqljson.QueryDbToArray(db, "lower", "SELECT * from players;")
	if err != nil {
		panic(err)
	}

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": data})
}
