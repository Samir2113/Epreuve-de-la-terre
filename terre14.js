// Trié ou pas: 


const path = process.argv;

// The array with inputs user
let intArray = [];
for(i = 2; i < path.length; i++){
    intArray.push(path[i]);
}

// Interger or not
let integer = function(array){
    for(z = 0; z < array.length; z++){
        if(isNaN(array[z]) || array[z].includes(".")){
            return false;
        }
    }
    return true;
}


if(intArray.length > 0 && integer(intArray)){
    let counter = 0;
    let sort = true;
    for(j = 1; j < intArray.length; j++){
        if(parseInt(intArray[counter]) > parseInt(intArray[j])){
            sort = false;
            break;
        }
        counter++;
    }
    if(sort === true){
        console.log("Trié !");
    }else if(sort === false){
        console.log("Pas triée !");
    }
}else{
    console.log("Erreur!");
}
