package models

import (
	"net/http"
	"os/exec"

	"github.com/gin-gonic/gin"
)

type Player struct {
	firstname string `json:"firstname"`
	lastname  string `json:"lastname"`
}

func CreatePlayerTable() {
	cmd := exec.Command("docker", "cp", "data/players.csv", "clubhouseDb:/var/lib/mysql-files/players.csv")
	if err := cmd.Run(); err != nil {
		panic(err)
	}
	query := `DROP TABLE if exists players;`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE players (lastname VARCHAR(50), firstname VARCHAR(50));`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `LOAD DATA INFILE '/var/lib/mysql-files/players.csv' INTO TABLE players FIELDS TERMINATED BY ',' 
			LINES TERMINATED BY '\n' IGNORE 1 ROWS (lastname, firstname);`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}

}

func GetPlayers(c *gin.Context) {
	query := `SELECT * from players`
	rows, err := db.Query(query)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": rows})
}
