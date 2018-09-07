var TemplateHTML1;
var TemplateHTML2;

function preload(){
  TemplateHTML1 = loadStrings("editables/paradise.txt");
  TemplateHTML2 = loadStrings("editables/museum.txt");
}

function setup(){
  console.log(TemplateHTML1);
  console.log(TemplateHTML2);
}
