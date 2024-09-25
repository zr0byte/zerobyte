package proof

import (
	"0byte/helpers"
	"0byte/models"
	"0byte/zkp"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GenerateProof(ctx *gin.Context) {
	var req models.ProofRequestObject
	var res models.ZKProofResponse

	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "bad request",
			"success": false,
		})
		return
	}

	walletBalance, err := helpers.GetWalletBalance(req.SendersAddress)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
			"data":  res,
		})

		return
	}

	req.SendersBalance = float64(walletBalance.Lamports)

	res, err = zkp.GenerateZKProof(req)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
			"data":  res,
		})
	}

	ctx.JSON(http.StatusOK, gin.H{
		"response": res,
	})

	return

}
