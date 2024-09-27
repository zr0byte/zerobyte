# Setup Backend 

This backend contains an API that generates zero knowldge proof and commitments for inputs.

# To run this code : 

## Install go

### Macos

```bash
brew install go
```

### Run the Code

1. 
```bash
cd backend
```

2. 
```bash
go mod tidy
```
3. 
```bash
go run main.go
```

## Hit API on postman

> URL :    http://localhost:8080/generate-proof

Request Body : 

```json
{
    "senders_address" : "",
    "revievers_Address": "",
    "amount" : 0.182
}
```
