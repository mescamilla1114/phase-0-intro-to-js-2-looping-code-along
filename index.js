// Code your solutions in this file
const surprise = ["Guadalupe", "Ollie", "Aki"];
const newAr = [];

function writeCards (surprise, newAr){

    for(let i = 0;i <surprise.length;i++){
        newAr[i]=`Thank you, ${surprise[i]}, for the wonderful surprise gift!`;
        newAr.length++;
    }
    return(newAr);

}

function countDown(){
    let cDown;
while (cDown>0) {
  console.log(cDown++);
}
}
