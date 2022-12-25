// Taille d'une chaîne:


const path = process.argv;
const input = process.argv[2];



if(path.length == 3 && isNaN(input)){
    
    let inputLength = 0;
    
    for(i = input.length -1  ; i >= 0; i--){
        inputLength++
    }
    
    console.log(inputLength);

}else{
    console.log("erreur!")
}
