function digitPerkalianMinimum(angka) {
    var divide =0;
    var outputLength = 0;
    for(var i=1; i<=(Math.round(angka/2));i++){
        if(angka % i == 0){
            divide = angka/i;
            outputLength = divide.toString().length + i.toString().length;

            if(outputLength == 2){
                break;
            }
        }
    }
    
    return outputLength;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2