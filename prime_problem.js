// check_prime or not

let number=13;
let factor=0;                                                                                         

for(let i = 2; i <= Math.sqrt(number); i++){
 
  if(number % i == 0){

     factor++;
  }
}

if(factor==0){
  console.log("Prime Number");
}
else{
  console.log("Not a Prime Number");
}
