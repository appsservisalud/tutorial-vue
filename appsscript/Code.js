// Spreadsheet Information
var ss = SpreadsheetApp.openById("1z34KYGPUe5l2CYP-xzeXqvGzZmMg93NqrNibsificuY");
var sheet = ss.getSheetByName('Data');
var rows = sheet.getRange(1,1,sheet.getLastRow(),sheet.getLastColumn()).getValues();

function doGet(){
    
    var template = HtmlService.createTemplateFromFile("index");
    var output = template.evaluate();
    return output;
}


function getSheetJson(){

var dataBody = [];
var body = rows.slice(1);


//body
body.forEach(function(res,i){
  dataBody.push(res);
});



//var datos = Utilities.formatString("%s,%s",k,j)
//Logger.log(datos)

personas_Json = []

for(var i=0;i<dataBody.length;i++)
{
  personas_Json.push({id:dataBody[i][0],nombre:dataBody[i][1],apellido:dataBody[i][2],email:dataBody[i][3]}) 
}

    
return personas_Json   

}

function update_data()
{
  
  var values = [['2','david','martinez','luis@gmail.com']];
  for(var i=0;i<dataBody.length;i++)
{
  
  if ( dataBody[i][0] == values[0][0]){
  var range = sheet.getRange(dataBody[i][0],1,1,4);
  range.setValues(values);

  }
}
  
}

function get_data(persona)
{
  
  var data = sheet.getDataRange().getDisplayValues()
  var id = ss.getLastRow() + 1
  sheet.appendRow([id,persona.nombre,persona.apellido,persona.email]);
  

  return persona

  throw("Registro incorrecto");

}