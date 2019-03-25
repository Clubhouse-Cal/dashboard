package models

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func InitDb() {
	var err error
	db, err = sql.Open("mysql", "root@/clubhouse")
	if err != nil {
		panic(err)
	}
}
