function cancel(){
  document.getElementById("result").value="";
}

function button(val){
  document.getElementById("result").value += val
}

function calc(){
  let x = document.getElementById("result").value
  let n = x.replace('x', '*')
  let y = math.evaluate(n)
  document.getElementById("result").value = y;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calc();
  }
});

function calnew(event) { 
  document.addEventListener('keydown'); {
    if (event.key == '0' || event.key == '1' 
       || event.key == '2' || event.key == '3' 
       || event.key == '4' || event.key == '5' 
       || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
       || event.key == '+' || event.key == '-' 
       || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
  } 
}