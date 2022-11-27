//document.write("hello");
function NOT(){
    alert("compuerta NOT");
    let ValorAevaluar = prompt("elige un valor a inverir (verdadero o falso)");

    switch (ValorAevaluar) {
        case "verdadero":
            alert("inverso: falso");
            break;
        case "falso":
            alert("inverso: verdadero");
        break;
        default:
            alert("?");
            break;
    }
}
        
function AND(){
    alert("compueta AND")
    let VariableA = prompt("dame 'verdadero' o 'falso' para comparar ");
    let VariableB = prompt("dame 'verdadero' o falso para compararlo con el primero");
 
    if (VariableA && VariableB == "verdadero"){
        alert(VariableA + " & "+ VariableB +" = verdadero");
    }else{
        alert(VariableA + " & "+ VariableB +" = falso");
    }
} 
        
function OR(){
    alert("compueta OR");
    let VariableA = prompt("dame 'verdadero' o 'falso' para comparar");
    let VariableB = prompt("dame 'verdadero' o 'falso' para compararlo con el primero");
    if (VariableA || VariableB == "verdadero"){
        alert(VariableA + " + "+ VariableB +" = verdadero");
    }else{
        alert(VariableA + " + "+ VariableB +" = falso");
    }
            
}
    