function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function adivinarNumero(){
    let numero = (getRandomInt(11));


    for (let i = 0; i < 3; i++) {
        alert("tienes " +(3 - i) + " intentos")
        adivino = prompt("adivina un numero del 1 al 10");        
        
        if (adivino == numero) {
            alert("bien hecho =)");
            break;
        } else {
            alert("no pudiste =(");
        }
    }

  }