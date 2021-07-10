const amount=1000;
var msg;
if(amount<10000)
{
 
    console.log("ammount is within the ten thousand");

}
else{
    console.log("amount exceeded");

}
console.log("ammount calculation program");
console.log(__dirname);


(amount <10000) ? (msg="amount is within 10K",console.log("true")) : (msg="not within 10k",console.log("false"));
console.log(msg);
