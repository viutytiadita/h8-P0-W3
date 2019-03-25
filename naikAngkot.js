function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arrOutput =[]
    var bayar = 0;
    var jarak = 0
    for(var i=0; i < arrPenumpang.length; i++){
        for(var j=0; j < rute.length; j++){
            if(rute[j] == arrPenumpang[i][1]){
                var indexAsal = j
            }
            if(rute[j] == arrPenumpang[i][2]){
                var indexTujuan = j
            }
            
            if(indexAsal >= 0 && indexTujuan >= 0){
                jarak = indexTujuan - indexAsal;
                if(jarak < 0){
                    jarak = jarak * -1
                }
                bayar = 2000*jarak
            }
        }
        
       var output = {
           penumpang : arrPenumpang[i][0],
           naikDari : arrPenumpang[i][1],
           tujuan : arrPenumpang[i][2],
           bayar : bayar
       }
       
       arrOutput.push(output);
    }
    return arrOutput
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
