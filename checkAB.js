function checkAB(str) {
    var lengthAB = false;

    for(var i=0; i<str.length;i++){
        if(str[i] == 'a' && str[i+4] == 'b' || str[i] == 'b' && str[i+4] == 'a'){
            lengthAB = true;
        }
    }
    return lengthAB;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false