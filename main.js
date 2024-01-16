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