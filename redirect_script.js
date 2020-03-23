var targetURL="https://web.bloggerbyte.net"
var currentsecond=5;
function countredirect(){
if (currentsecond!=1){
currentsecond-=1
document.getElementById('timer').value=currentsecond;
}
else{
window.location=targetURL;
return
}
setTimeout("countredirect()",1000)
}
countredirect();
