function generateUtility() {
    var output = {
        lowerVocal : {
            a : 'b',
            e : 'f',
            i : 'j',
            o : 'p',
            u : 'v',
        }, 
        upperVocal : {
            A : 'B',
            E : 'F',
            I : 'J',
            O : 'P',
            U : 'V',
        },
        lowerCase : 'abcdefghijklmnopqrstuvwxyz',
        upperCase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    return output;
}

function changeVocals(str) {
    var lowerVocal = generateUtility().lowerVocal
    var upperVocal = generateUtility().upperVocal
    var output = ''

    for(char of str){
        if(lowerVocal[char] !== undefined){
            output = output + lowerVocal[char]
        } else if(upperVocal[char] !== undefined){
            output = output + upperVocal[char]
        } else {
            output = output + char
        }
    }

    return output
}

function reverseWord (str) {
    var output = ''
    for(var i=str.length-1; i>=0; i--){
      output = output + str[i]
    }
    return output
}

function setLowerUpperCase(str) {
    var lowerCase = generateUtility().upperCase
    var upperCase = generateUtility().lowerCase
    var output = ''
    var found = true ;

    for(i in str){
        if(str[i] == ' '){
             output = output + ' '
        }
        for(var j = 0; j<=26; j++){
            if(str[i] == lowerCase[j]){
                output = output + upperCase[j]
                found = true
                break
            } else if(str[i] == upperCase[j]){
                output = output + lowerCase[j]
                found = true
                break
            } else {
                found = false
            }
        }
        if(!found){
            output = output + str[i]
        }
    }
    
    return output
}

function removeSpaces(str) {
    var output = ''
    for(char of str){
         if(char == ' '){
            output = output + ''
        } else {
            output = output + char
        }
    }
    return output
}

function passwordGenerator(str) {
    if(str.length>= 5){
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(str))))
    }
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'