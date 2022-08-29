function doGet(){
    
    var template = HtmlService.createTemplateFromFile("index");
    var output = template.evaluate();
    return output;
}


function doPost(){

    var datos = "datos"
    return Logger.log(datos);

}


function get_data()
{
  
  //var ss = SpreadsheetApp.openById("1z34KYGPUe5l2CYP-xzeXqvGzZmMg93NqrNibsificuY");
  //var sheet = ss.getSheetByName('Data');
  return Logger.log("David");

  //sheet.appendRow([userInfo]);
}




