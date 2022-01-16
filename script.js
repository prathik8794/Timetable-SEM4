setInterval(function(){
var i = Math.floor(Math.random()*256).toString(16);
var j =  Math.floor(Math.random()*256).toString(16);
var k =  Math.floor(Math.random()*256).toString(16);
document.getElementById('dd').style.color = '#'+i+j+k},1000);

setInterval(function(){
    var i = Math.floor(Math.random()*256).toString(16);
    var j =  Math.floor(Math.random()*256).toString(16);
    var k =  Math.floor(Math.random()*256).toString(16);
    document.getElementById('hp').style.backgroundColor= '#'+i+j+k},1000);