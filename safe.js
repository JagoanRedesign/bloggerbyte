//<![CDATA[
function changeLink() {
var e = Base64.decode(res);
window.open(e, "_blank")
}
var currentURL = location.href,
str = currentURL,
res = str.replace("https://dest-demo2.blogspot.com/p/download-page.html?url=", "");
document.write('<a class="btn btn-download" id="extralink" target="_blank" rel="nofollow" style="cursor:pointer" onclick="changeLink()">Click Here To Download</a>');onload: generate();//]]>
