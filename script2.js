console.log("working...")
var inputTextElement=document.getElementById('textInput');
var volumeTextElement=document.getElementById('volumeText');
var btnCalculateElement=document.getElementById('btn_calculate')
function calculate(){
   var result =( (4/3)*Math.PI*Math.pow((inputTextElement.value),3)).toFixed(4);
   volumeTextElement.value=result;
   inputTextElement.value="";
   
}
btnCalculateElement.addEventListener('click',calculate)

