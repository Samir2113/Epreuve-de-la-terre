const input = process.argv[2];

if(!isNaN(input)){
    if(input % 2 == 0){
        console.log("pair");
    }else{
        console.log("impair");
    }
}else{
    console.log("Entrez un nombre entier!");
}