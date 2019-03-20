function generateLibraryAlphabetManual(){
    var output = {
      'A' : 'a',
      'B' : 'b',
      'C' : 'c',
      'D' : 'd',
      'E' : 'e',
      'F' : 'f',
      'G' : 'g',
      'H' : 'h',
      'I' : 'i',
      'J' : 'j',
      'K' : 'k',
      'L' : 'l',
      'M' : 'm',
      'N' : 'n',
      'O' : 'o',
      'P' : 'p',
      'Q' : 'q',
      'R' : 'r',
      'S' : 's',
      'T' : 't',
      'U' : 'u',
      'V' : 'v',
      'W' : 'w',
      'X' : 'x',
      'Y' : 'y',
      'Z' : 'z',
      ' ' : ' '
    }
    return output;
}

function tukarBesarKecil(kalimat) {
    var libraryAlphabet = generateLibraryAlphabetManual();

    var output = '';
  
    for(i=0; i<kalimat.length; i++){
      for(key in libraryAlphabet){
        if(kalimat[i] === key){
          output = output + libraryAlphabet[key]
          break
        } else if(kalimat[i] === libraryAlphabet[key]){
           output = output + key
           break
        }
      }
          if(kalimat[i] !== libraryAlphabet[key] && kalimat[i] !== key){
              output = output + kalimat[i]
          }
      }
    return output
}

  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"