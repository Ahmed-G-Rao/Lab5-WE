var btnTableElement=document.getElementById('btn_1');
var btnCalculatePower=document.getElementById('btn_2');
var btnGenerateSeq=document.getElementById('btn_3');
var btnEvenOddGenerator=document.getElementById('btn_4');
btnTableElement.addEventListener('click',function(){
    var inputNumber = prompt("Enter A Number To Generate Table:");
  document.write('<table border="0.5">');
  for (i=1; i <= 10; i++) {
      document.write('<tr><td>' + inputNumber + "  x  " + i + "</td><td>=</td><td>" + i*inputNumber + "</td></tr>");
  };
  document.write('</table>');
});
btnCalculatePower.addEventListener('click',function(){
    var numbase = prompt("Enter Base : ");
  var power = prompt("Enter Power : ");
  var result = Math.pow(numbase, power);
  document.write("Result  :  "+result);
})
btnGenerateSeq.addEventListener('click',function(){
    var numInitial = prompt("Enter Starting Number : ");
    var numFinal = prompt("Enter Ending Number : ");   
    for (i=numInitial; i <= numFinal; i++) {
       
        document.write( i +"," +" " );
    };
})
btnEvenOddGenerator.addEventListener('click',function(){
    var choice=prompt("Enter E for Even series and O for Odd Series");
    var endLimit = prompt("Eneter End Number ");
    
    if (choice=="E"||choice=="e") {
  for (i=2; i <= endLimit; i=i+2) {
       
        document.write( i +" ");
    }
  } 
  else if (choice=="O"||choice=="o"||choice=="0") {
  
    for (i=1; i <= endLimit; i=i+2) {
       document.write( i  +" ");
  
}}})