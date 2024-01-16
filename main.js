function cancel(){
  document.getElementById("result").value="";
}

function button(val){
  document.getElementById("result").value += val;
}

function calc(){
  let x = document.getElementById("result").value
  let y = math.evaluate(x)
  document.getElementById("result").value = y;
}