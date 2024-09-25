package main

import (
	"0byte/controllers/proof"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "hii",
		})
	})

	r.POST("/generate-proof", proof.GenerateProof)
	r.Run()
}
