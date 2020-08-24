// is valid ip kata

function isValidIP(str) {
    modifiedInput = str.split(".");
    console.log(modifiedInput);
    if(modifiedInput.length != 4) {
        return false;
    }
    for(let i = 0; i < modifiedInput.length; i++) {
        if(modifiedInput[i][0] === '0' && Number(modifiedInput[i]) != 0) {
            console.log(modifiedInput[i] + " false");
            return false;
        } else if (modifiedInput[i].match(/^[0-9]+$/) === null) {
            console.log(modifiedInput[i] + " false");
            return false;
        } else if (Number(modifiedInput[i]) > 255 || Number(modifiedInput[i]) < 0) {
            console.log(modifiedInput[i] + " false");
            return false;
        }
    }
    console.log(str + " true");
    return true;
}


// isValidIP("123.45.67.89");
// isValidIP("123.45.67.089");
// isValidIP("123.45.256.089");
// isValidIP("123.-1.67.089");
// isValidIP("1.2.3.4 ");
// isValidIP("1.2.3.4.5");
// isValidIP("84.46.0.95");