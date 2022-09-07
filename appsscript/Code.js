function doGet(){
    
    var template = HtmlService.createTemplateFromFile("index");
    var output = template.evaluate();
    return output;
}


function doPost(){

    var datos = "datos"
    Logger.log(datos);

}


function get_data(persona)
{
  
  var ss = SpreadsheetApp.openById("1z34KYGPUe5l2CYP-xzeXqvGzZmMg93NqrNibsificuY");
  var sheet = ss.getSheetByName('Data');
  var id = ss.getLastRow() + 1
  sheet.appendRow([id,persona.nombre,persona.apellido,persona.email]);
  

  return persona

  throw("Registro incorrecto");

}




