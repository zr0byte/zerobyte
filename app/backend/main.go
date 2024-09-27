package main

import (
	"0byte/helpers"
	"fmt"
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

	r.POST("/generate-proof", generateProof)
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

}

func generateProof(ctx *gin.Context) {
	var req ProofRequestObject
	var res ProofResponse

	if err := ctx.ShouldBind(ctx.Request.Body); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "bad request",
			"success": false,
		})
	}

	_, err := helpers.GetWalletBalance(req.SendersAddress)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
			"data":  res,
		})
	}

	fmt.Println(req)

}
