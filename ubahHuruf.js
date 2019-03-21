function ubahHuruf(kata) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var output = '';
  for(var i=0; i<kata.length;i++){
    if(kata[i] == 'z'){
      output = output + alphabet[0];
    }
    for(var j=0; j<=26; j++){
      if(kata[i] == alphabet[j] && kata[i] != 'z'){
        output = output + alphabet[j+1];
      }
      
    }
    
  }
  return output;
}

// TEST CASES
console.log(ubahHuruf('wowz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu