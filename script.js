

let a,b;{
 a=+prompt ("wtite number");
  b=+prompt ("wtite second number");
  function maxNumber(){
  if (a>b)alert (a);
  if(a<b)alert(b);
 else alert(a=b);}}
  maxNumber();


  let q;
  {
  q=+prompt ("enter the number");
  function reverse(){
      if(q>0) alert ('-'+ q);
      if( q=-q )alert ((q));
  }}
  reverse();


let three=3;
  let number=+prompt("enter number");
  let count=+prompt("enter count");


 function appp(){
   
       let appp =(+number)+((+three)*count);
       alert(appp);
    
   }
    appp()



function getMetric(metric, km, m, cm){
  
  if (metric==="m") {
      let metr = m(km)
      return metr.toString()+" m";
  }
  else if (metric==="cm") {
      let metr = cm(km)
      return metr.toString()+" cm";
}
}

function KmToM(km){
return km * 1000
}
function KmToCm(km){
return km * 100000
}
alert(getMetric(prompt(), prompt(), KmToM, KmToCm))

 /* Доброго дня. Було дуже важко зробити завдання на metric...
 Не знаю наскільки вірно це рішення(
 Тут у промт пишемо одиницю в яку потрібно перевести значення (наприклад потрібно перевести у cm).
  Далі потрібно прописати число  (завідомо це значення буде у кілометрах)
  Потім виводиться результат 
 */ 














    




  





