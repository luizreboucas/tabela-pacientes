var botaoAdicionar = document.querySelector('#buscar-pacientes');
botaoAdicionar.addEventListener('click',()=>{
    console.log('buscando pacientes');

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.send();

    xhr.addEventListener('load', ()=>{
        
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach((paciente)=>{
            montaPacienteNaTabela(paciente)
        })
    })
    

})