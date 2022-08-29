function doGet(){
    
    var template = HtmlService.createTemplateFromFile("index");
    var output = template.evaluate();
    return output;
}

function get_data(userInfo)
{
  
  var ss = SpreadsheetApp.openById("1z34KYGPUe5l2CYP-xzeXqvGzZmMg93NqrNibsificuY");
  var sheet = ss.getSheetByName('Data');
  Logger.log(userInfo);

  //sheet.appendRow([userInfo]);
}

function hello()
{
    console.log("Hello world");
}


