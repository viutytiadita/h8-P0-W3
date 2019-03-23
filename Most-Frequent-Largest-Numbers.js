function sorting(arrNumber) {
    for(var i=0; i<arrNumber.length-1; i++){

        var minusIndex = i
    
        for(var j=i+1; j<arrNumber.length; j++){
    
          if(arrNumber[j] < arrNumber[minusIndex]){
            minusIndex=j
          }
    
        }
    
        var smallerNumber = arrNumber[minusIndex] 
        arrNumber[minusIndex] = arrNumber[i]
        arrNumber[i] = smallerNumber
      }
      return arrNumber
}

function getTotal(arrNumber) {
  var count =0
  if(arrNumber.length == 0){
      return "''"
  }
    var highest = arrNumber[arrNumber.length-1]
    var i =arrNumber.length-1
    while(arrNumber[i] == highest){
        count = count + 1
        i--
    }
  return 'angka paling besar adalah '+ highest + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber); console.log(listSort)
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''