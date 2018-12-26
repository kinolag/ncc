Array.prototype.shuffle = function () {
  var arrNew = [];
  var next = "";
       while(arrNew.length < this.length) {
            next = this[Math.floor(Math.random() * this.length)];
              if(arrNew.indexOf(next) === -1) {
                arrNew.push(next); 
              } 
        } 
    return arrNew;
  };


var arrayA = ["a1", "a2", "a3", "a4", "a5", "a6"];
var arrayB = ["b1", "b2", "b3", "b4", "b5", "b6"];
var arrayC = ["c1", "c2", "c3", "c4", "c5", "c6"];

var nodi = ["Languages", "Media", "Learning", "Change in response", "Mutuality", "Places"];
var cicli = ["Reading/Writing", "Study/Work", "Learning/Teaching", "Playing/Coaching", "User/Author", "Contact/Distance"];
var connessioni = ["Network", "Languages + code", "Sound + image", "Body + devices", "People", "Transport"];

function shuffleNo() {
  nodi = nodi.shuffle();
  for(let i=0; i < arrayA.length; i++) {
    document.getElementById(arrayA[i]).textContent = nodi[i];
  }
}

document.getElementById("a0").addEventListener("click", shuffleNo);

function shuffleCi() {
  cicli = cicli.shuffle();
  for(let i=0; i < arrayA.length; i++) {
    document.getElementById(arrayB[i]).textContent = cicli[i];
  }
}

document.getElementById("b0").addEventListener("click", shuffleCi);

function shuffleCo() {
  connessioni = connessioni.shuffle();  
  for(let i=0; i < arrayA.length; i++) {
    document.getElementById(arrayC[i]).textContent = connessioni[i];
  }
}

document.getElementById("c0").addEventListener("click", shuffleCo);

function shuffleAll() {

  nodi = nodi.shuffle();
  cicli = cicli.shuffle();
  connessioni = connessioni.shuffle();  

  for(let i=0; i < arrayA.length; i++) {
    document.getElementById(arrayA[i]).textContent = nodi[i];
    document.getElementById(arrayB[i]).textContent = cicli[i];
    document.getElementById(arrayC[i]).textContent = connessioni[i];
  }
}

document.getElementById("abc").addEventListener("click", shuffleAll);

console.log(nodi);
console.log(cicli);
console.log(connessioni);