function GetSha(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://api.github.com/repos/groovymammoth/vrthday-builds/git/refs/heads",false);
  xhr.send(null);
  var json = JSON.parse(xhr.response);
  var sha = json[0].object.sha;
  return sha;
}

function PostFile(file){
  var name = GetSha().concat(".html");
  var fileb64 = btoa(file);
  var token = "OTkxNTljNWJkMDU1ODU3YjA2M2QyNzdiYWQ2OTgxMDRhZGE1NDllMw==";
  var payload = {
    "message":"Test Commit",
    "content":fileb64
  }
  var xhr = new XMLHttpRequest();
  xhr.open("PUT","https://api.github.com/repos/groovymammoth/vrthday-builds/contents/"+name+"?access_token="+atob(token));
  xhr.send(JSON.stringify(payload));
}
