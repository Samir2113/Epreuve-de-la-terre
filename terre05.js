const nbr1 = process.argv[2];
const nbr2 = process.argv[3];

const result = nbr1 / nbr2;
const reste = nbr1 % nbr2;


if(nbr1 == reste || nbr2 == 0){
    console.log("erreur");
}else{
    console.log(nbr1 + " / " + nbr2 + " = " +result);
    console.log("reste" + " = " + reste);
}
