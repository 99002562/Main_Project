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
