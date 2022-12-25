// Inverser une chaîne:


let input = process.argv;
let output = "";

function reverse(e){ 
    
    for(j = e.length - 1; j >= 0; j--){
        output += e.charAt(j);
    }
    output += " ";
}


for(i = input.length -1; i >= 2; i--){

    reverse(input[i].toString());

    if(i == 2){
        console.log(output);
    }
}




