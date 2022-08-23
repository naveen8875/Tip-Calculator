let addpeople = document.getElementById('add');
let subpeople = document.getElementById('sub');
let resultofadd = document.getElementById('res');
var number = 1; 
let bill = document.getElementById('billamt');
let tipp = document.getElementById('tippercent');
let calc = document.getElementById('calculate');

addpeople.onclick = () => 
{
    number+=1;
    resultofadd.innerHTML=number;
}

subpeople.onclick = () => 
{   if(number>1){
    number-=1;
    resultofadd.innerHTML=number;
}
}


function calculatetip(totalbillamt,tipperc,numbero)
{
   let finalamt = totalbillamt *  tipperc/100
   let totalbill = finalamt/numbero;
   document.getElementById('finalll').innerHTML="$"+totalbill.toPrecision(3);
}

calc.onclick = () => 
{
    let finalbill = bill.value;
    let finaltip = tipp.value;
    calculatetip(finalbill,finaltip,number);
}
console.log(bill);