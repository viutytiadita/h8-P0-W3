function changeMe(arr) {
    var yearNow = 2019;
    
    if(arr.length == 0){
        console.log('""');
    }
    for(i in arr){
        var output = {}
            output.firstName = arr[i][0]
            output.lastName = arr[i][1]
            output.gender = arr[i][2]
            if(arr[i][3] == undefined){
                output.age = "Invalid Birth Year"
            }
            else{
                output.age = yearNow - arr[i][3]
            }
             
        console.log((Number(i)+1) + '. ' + output.firstName +' ' + output.lastName +':')
        console.log(output)
    }
    
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""