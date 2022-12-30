// Trouver la Suisse (lol):

const length = process.argv.length;
const path = process.argv;


let intArray = [];
for(i = 2; i < path.length; i++){
    intArray.push(path[i]);
}


let integer = function(){
    for(i = 0; i < 3; i++){
        if(isNaN(intArray[i])){
            return false;
        }
    }
    return true;
}



if(intArray.length == 3){
    if(integer()){
        console.log(intArray[1]);
    }else{
        console.log("Erreur! Entrez 3 entiers.");    
    }
}else{
    console.log("Erreur! Entrez 3 entiers.");
}