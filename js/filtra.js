var campoFiltro = document.querySelector('#filtra-paciente');

campoFiltro.addEventListener("input",()=>{

    var pacientes = document.querySelectorAll('.paciente');
    if(campoFiltro.value.length > 0){
        for(let i = 0;i < pacientes.length;i++){
        
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;
            var expressao = new RegExp(campoFiltro.value, "i");
    
            if(!expressao.test(nome)){
                paciente.classList.add('invisible');
            }else{
                paciente.classList.remove('invisible');
            }
        
        }
       
    }else{
        for(let i = 0;i < pacientes.length;i++){
        
            var paciente = pacientes[i];
            paciente.classList.remove('invisible');
        }
    }
    

   
});


