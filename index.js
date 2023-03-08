function conf(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let consulta = document.getElementById('consulta').value;
    let confirmacion = confirm("Los datos ingresados son:\n\nNombre: "+nombre+"\nApellido: "+apellido+"\nE-mail: "+email+"\nConsulta: "+consulta+"\n\n¿Son estos datos correctos?");
    if (confirmacion == true && !nombre==0 && !email==0 && !consulta==0){
        alert("Formulario enviado.");
        return true;
    } else if (nombre==0){
        alert("Por favor revise la información ingresada. El campo 'Nombre' es requerido.");
        return false;
    } else if (email==0){
        alert("Por favor revise la información ingresada. El campo 'E-mail' es requerido.");
        return false;
    } else if (consulta==0){
        alert("Por favor revise la información ingresada. El campo 'Consulta' es requerido.");
        return false;
    } else {
        alert("Por favor revise la información ingresada.");
        return false;
    }
}