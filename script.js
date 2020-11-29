const myCalculator=document.querySelector('.MyCal');
const keys=[['1','2','3','+'],['4','5','6','-'],['7','8','9','*'],['C','0','=','/']];
const myOper=['+','-','*','/'];
let myOutput;
document.addEventListener('DOMContentLoaded',function(){
 myOutput=document.createElement('div');
myOutput.innerHTML="0";
myOutput.classList.add("output");
console.log(myOutput);
myCalculator.appendChild(myOutput);

for(y=0;y<keys.length;y++){
    let div=document.createElement('div');
    div.classList.add('row');
    for(x=0;x<keys[y].length;x++){
        let btn=document.createElement('div');
        btn.classList.add('btn');
        btn.innerHTML=keys[y][x];
       btn.addEventListener('click',btnHit);
        div.appendChild(btn);
      
    }
  console.log(div);
  myCalculator.appendChild(div);
}


})
function btnHit(e){
   console.log(this.innerText);
   let myValue=this.innerText;
   let myCaln=myOutput.innerText;
  
   if(myCaln=='0')
   { myCaln="";
   } 
   if(myValue=="="){
     myCaln=eval(myCaln);
   }else{
   let lastchar=myCaln.substring(myCaln.length-1);
   console.log("lastchar"); 
   if(myOper.includes(myValue)){
     if(myOper.includes(lastchar)){
       myCaln=myCaln.substring(0,myCaln.length-1);
     }
     else{
     myCaln=eval(myCaln);}
   }
   myCaln=myCaln+myValue;
  }
  if(myValue=="C"){
    myCaln=0;
  }
  
   myOutput.innerText=myCaln;

}
