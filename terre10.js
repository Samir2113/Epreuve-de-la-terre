// Nombre premier:


const input = parseInt(process.argv[2]); 

if(input == 0 || input == 1){
    console.log(input + " n'est pas un nombre premier.");
}else if(isNaN(input)){
    console.log("Erreur: Veuillez entrer un nombre.");
}else{
    
    let counter = 0;

    for(i = 1; i <= input; i++){
        let rest = input % i;
        if(rest == 0){
            counter++
        }
    }
    if(counter == 2){
        console.log(input + " est un nombre premier.");
    }else{
        console.log(input + " n'est pas un nombre premier.");
    }
}