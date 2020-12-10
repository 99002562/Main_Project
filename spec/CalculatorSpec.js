describe('Testing the Calculator', ()=>{
  it('should add 2 numbers', ()=>{
      const result = addFunc(3,3);
      expect(result).toBe(6);
  
  })

 

  it("should subtract 2 numbers", ()=>{
      const result = subFunc(12,6);
      expect(result).toBe(6);
  })


});
const addFunc = function(v1, v2){
    v1 = getNumber(v1);
    v2 = getNumber(v2);
    return v1 + v2;
}

const subFunc = function(v1, v2){
    return v1 - v2;
}
const mulFunc = function(v1, v2){
    return v1 * v2;
}
const divFunc = function(v1, v2){
    return v1 / v2;
}

const PerFunc = function(v1, v2){
    return (v1 %v2);
}
const SqrFunc = function(v1, v2){
    return Math.sqrt(v1);
}

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
 
