class Juego{
    constructor(){
    }
    eleccion(){
        //Asignar ID declarados a los atributos
        this.desicion = document.getElementById('btn-eleccion');
        this.bPiedra = document.getElementById('btn-Piedra');
        this.bPapel = document.getElementById('btn-Papel');
        this.bTijera = document.getElementById('btn-Tijera');

        //Añadir eventos a los botones
        this.bPiedra.addEventListener('click', () => {
            this.iniciarJuego('btn-Piedra');
        });
        this.bPapel.addEventListener('click', () => {
            this.iniciarJuego('btn-Papel');
        });
        this.bTijera.addEventListener('click', () => {
            this.iniciarJuego('btn-Tijera');
        });
    }
    iniciarJuego(desicion){
        //Asignar el valor que retornen las funciones a las variables
        let bot = this.moverbot();
        let usuario = this.usuario(desicion);
        let ganador = this.ganador(bot, usuario);

        if(ganador == 1){//Si el ganador es el bot
            this.desicion.innerHTML = "Lo sentimos, Has perdido manco!";
        }else if(ganador == 2){//Si el ganador es el usuario
            this.desicion.innerHTML = "Muy bien, has ganado!";
        }else if(ganador == 3){//Si es un empate
            this.desicion.innerHTML = "Ha sido un empate";
        }
    }

    usuario(desicion){
        switch(desicion){
            case 'btn-Piedra':
                //Cambiar imagen a piedra
                document.getElementById("imagen1").src = "Imagenes/Piedra.png"
                break;
            case 'btn-Papel':
                //Cambiar imagen a papel
                document.getElementById("imagen1").src = "Imagenes/Papel.png"
                break;
            case 'btn-Tijera':
                //Cambiar imagen a tijera
                document.getElementById("imagen1").src = "Imagenes/Tijera.png"
                break;
        }
        //Retornar la ocion que eligio el usuario
        return desicion;
    }

    moverbot(){
        //Arreglo donde se escogera una opcion aleatoriamente
        let opciones = ['btn-Piedra', 'btn-Papel', 'btn-Tijera'];
        let opciones1 = [1,2,3];
        //Numero ramdom
        let no = Math.floor(Math.random()*3);
        switch(opciones1[no]){
            case 1:
                //Cambiar imagen a piedra
                document.getElementById("imagen3").src = "Imagenes/Piedra.png"
                break;
            case 2:
                //Cambiar imagen a papel
                document.getElementById("imagen3").src = "Imagenes/Papel.png"
                break;
            case 3:
                //Cambiar imagen a tijera
                document.getElementById("imagen3").src = "Imagenes/Tijera.png"
                break;
        }
        //La opcion elegida aleatoriamente se asignara a la variable movimiento
        let movimiento = opciones[no];
        //Retornar opcion elegida
        return movimiento;
    }

    ganador(b, u){
        //Se concatenaran la opcion del bot y la del usuario para hacer la comparacion
        switch(b+u){
            //El bot gana
            case 'btn-Piedrabtn-Tijera':
            case 'btn-Tijerabtn-Papel':
            case 'btn-Papelbtn-Piedra':
                return 1;
            //El usuario gana
            case 'btn-Tijerabtn-Piedra':
            case 'btn-Papelbtn-Tijera':
            case 'btn-Piedrabtn-Papel':
                return 2;
            //Empate
            case 'btn-Piedrabtn-Piedra':
            case 'btn-Tijerabtn-Tijera':
            case 'btn-Papelbtn-Papel':
                return 3;
        }
    }
}