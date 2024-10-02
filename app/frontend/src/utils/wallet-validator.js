
// Can check for the pubKey or wallet address user provided on chain
export const validateSolanaAddress = (address) => {
    const regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
    if(regex.test(address)) {
        console.log("add is valid");
    }
    else console.log("Invalid add");
    return regex.test(address);
};
