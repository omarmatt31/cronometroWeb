function convertirHoraString(hora, minuto, segundo, centisegundo){
    let detalleCronometro
    if(hora < 10){
        detalleCronometro = `0${hora} : `
    }else {
        detalleCronometro = `${hora} : `
    }
    if(minuto < 10){
        detalleCronometro += `0${minuto} : `
    }else {
        detalleCronometro += `${minuto} : `
    }
    if(segundo < 10){
        detalleCronometro += `0${segundo} : `
    }else {
        detalleCronometro += `${segundo} : `
    }
    if(centisegundo < 10){
        detalleCronometro += `0${centisegundo}`
    }else {
        detalleCronometro += `${centisegundo}`
    }
    return detalleCronometro

}
const avanzaCronometro = () => {
    const detalleCronometro = document.querySelector('#cronometro')
    if(centisegundo < 100){
        centisegundo ++
        detalleCronometro.textContent = convertirHoraString(hora, minuto, segundo, centisegundo)//`${hora} : ${minuto} : ${segundo} : ${centisegundo}`
    }else{
        centisegundo = 0
        segundo ++
        if(segundo < 60){
            detalleCronometro.textContent = convertirHoraString(hora, minuto, segundo, centisegundo)
        }else {
            segundo = 0
            minuto ++
            if(minuto < 60){
                detalleCronometro.textContent = convertirHoraString(hora, minuto, segundo, centisegundo)
            }else{
                hora ++
                detalleCronometro.textContent = convertirHoraString(hora, minuto, segundo, centisegundo)
            }
            
        }
        
    }
}

const iniciarCronometro = () =>{
    //console.log("Inicia cronometro")
    if(!funcionando){
        funcionando = true
        intervaloId = setInterval(avanzaCronometro, 10)
    }
}

const pausarCronometro = () =>{
    if(funcionando){
        funcionando = false
        clearInterval(intervaloId)
    }
    const detalleCronometro = document.querySelector('#cronometro')
    detalleCronometro.textContent = convertirHoraString(hora, minuto, segundo, centisegundo)

}

const reiniciarCronometro = () =>{
    const detalleCronometro = document.querySelector('#cronometro')
    hora = 0
    minuto = 0
    segundo = 0
    centisegundo = 0
    detalleCronometro.textContent = `0${hora} : 0${minuto} : 0${segundo} : 0${centisegundo}`
}

let centisegundo = 0
let segundo = 0
let minuto = 0
let hora = 0
let funcionando = false
let intervaloId
const btnInciar = document.querySelector('.btn-outline-info')
const btnPausar = document.querySelector('.btn-outline-warning')
const btnReiniciar = document.querySelector('.btn-outline-danger')
btnInciar.addEventListener('click', iniciarCronometro)
btnPausar.addEventListener('click', pausarCronometro)
btnReiniciar.addEventListener('click', reiniciarCronometro)