function makanTerusRekursif(waktu) {
    
    var pembagi = 15;

    if(waktu < pembagi && waktu % pembagi == 0){
        return 0
    } else if(waktu < pembagi){
        return 1
    } else {
        return 1 + makanTerusRekursif(waktu-pembagi)
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0