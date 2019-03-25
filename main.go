package main

import (
	"net/http"

	"github.com/Clubhouse-Cal/dashboard/server"

	"github.com/gin-gonic/gin"
)

func main() {
	models.InitDb()

	// temporarily create tables
	models.CreatePlayerTable()

	router := gin.Default()

	api := router.Group("/api")
	api.GET("test", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello world")
	})
	api.GET("players", models.GetPlayers)
	router.Run()
}
