var selectedRow=null
/* sugiero que cominete por crear todaas las funciones con sus nombres y luego definir su contenido facilitara la escritura de codigo */
function onFormSubmit(){
    if (validate()){
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
            resetForm();

    }
}
function readFormData(){
    var formData = {}
    formData["nombreCompleto"] = document.getElementById("nombreCompleto").value;
    formData["numeroEmpleado"] = document.getElementById("numeroEmpleado").value;
    formData["sueldo"] = document.getElementById("sueldo").value;
    formData["comuna"] = document.getElementById("comuna").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("empleadoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.nombreCompleto;
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.numeroEmpleado;
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.sueldo;
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.comuna;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"> Editar </a> <a onClick="onDelete(this)"> Eliminar </a>`;

}
function resetForm(){
    document.getElementById("nombreCompleto").value= "";
    document.getElementById("numeroEmpleado").value= "";
    document.getElementById("sueldo").value= "";
    document.getElementById("comuna").value= "";
    selectedRow = null
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombreCompleto").value= selectedRow.cells[0].innerHTML;
    document.getElementById("numeroEmpleado").value= selectedRow.cells[1].innerHTML;
    document.getElementById("sueldo").value= selectedRow.cells[2].innerHTML;
    document.getElementById("comuna").value= selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.nombreCompleto;
    selectedRow.cells[1].innerHTML = formData.numeroEmpleado;
    selectedRow.cells[2].innerHTML = formData.sueldo;
    selectedRow.cells[3].innerHTML = formData.comuna;
}
function onDelete(td){
    if (confirm('Estas seguro de eliminar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById("empleadoList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(){
    isValid=true;
    if (document.getElementById("nombreCompleto").value ==""){
        isValid = false;
    } else {
        isValid = true;
        if (!document.getElementById("nombreCompletoValidationError").classList.contains("hide"))
        document.getElementById("nombreCompletoValidationError").classList.add("hide");
    }
    return isValid;
}