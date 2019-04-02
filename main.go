package main

import (
	"github.com/Clubhouse-Cal/dashboard/server"

	"github.com/gin-gonic/gin"
)

func main() {
	models.InitDb()

	// temporarily create tables
	models.CreatePlayerTable()
	// models.CreateScheduleTable()
	// models.CreateTrackmanTable()

	router := gin.Default()

	api := router.Group("/api")
	api.GET("players", models.GetPlayers)
	api.GET("schedule", models.GetSchedule)
	api.GET("trackman", models.GetTrackmanData)
	router.Run()
}
