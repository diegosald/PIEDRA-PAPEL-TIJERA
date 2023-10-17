const cartas = {
     1:"img/papel.png",
     2:"img/piedra.png",
     3:"img/tijera.png"


}

function juega(valor) {

    let juegoMaquina = Math.floor(Math.random() * (4 - 1) + 1)
    document.getElementById("juegopc").src = cartas[juegoMaquina]
    document.getElementById("juegohumano").src = cartas[valor]
    const info = document.getElementById("info")
    alert(juegoMaquina + " " + valor)

// 1 papel 2 piedra 3 tijera
    switch (valor) {

        case 1:
            

            if (juegoMaquina == 1  ) {
                info.innerHTML ="<p class=\"fw-bold fs-3\">EMPATE</p>"

            }
            else if(juegoMaquina== 2){
                info.innerHTML ="<p class=\"fw-bold fs-3\">GANA USUARIO</p>"
               
            }
            else {info.innerHTML ="<p class=\"fw-bold fs-3\">GANA PC</p>"}
     



            break
        case 2:
            if (juegoMaquina == 2  ) {
                info.innerHTML ="<p class=\"fw-bold fs-3\">EMPATE</p>"

            }
            else if(juegoMaquina == 3){
                info.innerHTML ="<p class=\"fw-bold fs-3\">GANA USUARIO</p>"
               
            }
            else {info.innerHTML ="<p class=\"fw-bold fs-3\">GANA PC</p>"}
            break
        case 3:
            if (juegoMaquina == 3  ) {
                info.innerHTML ="<p class=\"fw-bold fs-3\">EMPATE</p>"

            }
            else if(juegoMaquina == 1){
                info.innerHTML ="<p class=\"fw-bold fs-3\">GANA USUARIO</p>"
               
            }
            else {info.innerHTML ="<p class=\"fw-bold fs-3\">GANA PC</p>"}
            break
            
    }



}