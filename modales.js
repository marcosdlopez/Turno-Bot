let modal, botones

window.onload = function(){

    //Identificación de componentes necesarios
    botones = document.querySelectorAll('.btn-turno')
    modal = document.querySelector('.contenedor-modal')

    for (boton of botones){

        boton.onclick = function(){
            
            let tipo_modal = this.getAttribute('data-tipo-modal')
            
            prepararModal(tipo_modal)
            activarFuncionesModal()
            mostrarModal()

        }
    }
}

/////////////////////////Funciones Modal/////////////////////////
function prepararModal(tipo_modal){

    let titulo_modal
    let clase_fondo
    
    switch(tipo_modal){
        case 'entrevista':
            titulo_modal = 'Solicitá una Entrevista!'
            clase_fondo ='fondo-entrevista'
            break
        case 'venta':
            titulo_modal = 'Asesorate con un vendedor!'
            clase_fondo = 'fondo-ventas'
            break
        case 'reclamo':
            titulo_modal = 'Disconforme? Te queremos escuchar!'
            clase_fondo = 'fondo-reclamos'
            break
    }

    modal.querySelector('#titulo').innerHTML = titulo_modal
    modal.querySelector('#tipo-pedido').innerHTML = tipo_modal

    modal.querySelector('.modal').classList.remove('fondo-entrevista','fondo-ventas','fondo-reclamos')
    modal.querySelector('.modal').classList.add(clase_fondo)

    //Limpiar imputs
    for (inputs of modal.querySelectorAll('input')){
        if(inputs.value != 'Enviar'){
            inputs.value = ''
        }        
    }
    modal.querySelector('textarea').innerHTML=''
}

function activarFuncionesModal(){
    
    //Activar botón CANCEL
    modal.querySelector('.cancel').onclick = function(){
       modal.classList.toggle('show')
    }

    //Activar botón ENVIAR
    modal.querySelector('#boton-enviar').onclick = function(evento){
       
        evento.preventDefault() //Desactivar evento de formulario

        // --> Se corre algún procesos de captura y envío de datos ( Se vé en próximo track)
        
        //Cierra el menú
        cerrarModal()
    }

}

function mostrarModal(){
    modal.classList.toggle('show')
}

function cerrarModal(){
    modal.classList.toggle('show')
}
