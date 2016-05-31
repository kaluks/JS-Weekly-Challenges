var array = ["Hazelnut", "Mocha", "Caramel"];
document.getElementById("button1").innerHTML = array[0];
document.getElementById("button2").innerHTML = array[1];
document.getElementById("button3").innerHTML = array[2];

document.getElementById("button1").onclick = function(){
console.log(this.innerHTML);
}

document.getElementById("button2").onclick = function(){
console.log(this.innerHTML);
}

document.getElementById("button3").onclick = function(){
console.log(this.innerHTML);
}
