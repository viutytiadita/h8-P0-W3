function cariModus(arr) {
  
  var modusCount = 0;
  var modus =-1;
  var modusNum =0;
  for(var i=0; i<arr.length;i++){
    var count=0;
      for(var j=0; j<arr.length;j++){
          if(arr[j] == arr[i]){
              count = count + 1;
          }
      }

     if(modusCount <= count){
            modusCount = count;
            modusNum = arr[i];
      } 
  }
  
  
  if(modusCount > 1 && modusCount !== arr.length){
      modus = modusNum;
  }
      return modus;
  
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1