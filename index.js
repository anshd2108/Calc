function display(value) {
    document.getElementById("result").value += value;
}
function calculate(){
    
    var a=document.getElementById("result").value
    var b=eval(a)
    document.getElementById("result").value=b
    
}
function clr() {
    document.getElementById("result").value = " "
    
    
   }