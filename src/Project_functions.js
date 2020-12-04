
const getNumber = function(val){
  if(isNaN(val))
      return 0;
  else 
      return parseFloat(val);
}

const $get = function(id){
  return document.getElementById(id);
}
function onAdd(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = addFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}
function onSub(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = subFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}
function onMul(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = mulFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}
function onDiv(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = divFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}

function onPer(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = PerFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}
function onSqr(){
  //take input values
  const fisrtVal=$get("val1").value;
  const secondVal=$get("val2").value;
  const result = SqrFunc(fisrtVal, secondVal);
  $get("spResult").innerText = result;

}
function Clr(){
  //take input values
  document.getElementById('val1').value = '';
  document.getElementById('val2').value = '';
  
}
