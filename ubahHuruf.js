function ubahHuruf(kata) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var output = '';
  for(var i=0; i<kata.length;i++){
    for(var j=0; j<=26; j++){
      if(kata[i] == alphabet[j]){
        output = output + alphabet[j+1];
      }
      if(kata[i] == 'z'){
        output = output + alphabet[0];
      }
    }
  }
  return output;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu