// Racine carré d'un nombre:



const input = parseInt(process.argv[2]);
let end = false;
let previousVal = 0;

for(i = 0; i < input; i++){
    let square1 = i * i;
    
    if(square1 == input){
        console.log("racine de " + input + " = " + i);
        break;
    }else if(square1 > input){ // Rounded 1
        for(j = 0; j <= 9; j++){
            let tenth = parseFloat((i-1) + "." + j);
            let square2 = tenth * tenth;
            
            if(square2 == input){
                console.log("racine de " + input + " = " + tenth);
                break;
            }else if(square2 > input){ // Rounded 2
                for(k = 0; k <= 9; k++){
                    let hundredth = (tenth - 0.1) + parseFloat("0" + "." + "0" + k);
                    let square3 = hundredth * hundredth;
                    
                    if(square3 == input){
                        console.log("racine de " + input + " = " + hundredth);
                        break;     
                    }else if(square3 > input){
                        console.log("racine de " + input + " = " + hundredth + " (valeur arrondie)");
                        end = true;
                        break;
                    }
                }
            }
            if(end){
                break;
            }
        }
    }
    if(end){
        break;
    }
}