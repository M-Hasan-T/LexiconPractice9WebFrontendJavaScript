function CreateElement() {
  let inputItem = document.getElementById("Input1").value;
  let liElement = document.createElement("li");
  let textNod = document.createTextNode(inputItem);
  liElement.appendChild(textNod);
  console.log(inputItem);
  if (inputItem === "") {
    alert("You must write something!");
  } else {
    document.getElementById("Ul1").appendChild(liElement);
  }
  document.getElementById("Input1").value = "";

  let spanElement = document.createElement("SPAN");
  let textNod2 = document.createTextNode("\u00D7");
  spanElement.className = "close";
  spanElement.appendChild(textNod2);
  liElement.appendChild(spanElement);
  let n;
  for (n = 0; n < close.length; n++) {
    close[n].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
  createCloseButton();
}

function createCloseButton() {
  let nodeList = document.getElementById("Ul1").getElementsByTagName("li");
  for (let i = 0; i < nodeList.length; i++) {
    var spanElement = document.createElement("SPAN");
    var textNod3 = document.createTextNode("\u00D7");
    spanElement.className = "close";
    spanElement.appendChild(textNod3);
    nodeList[i].appendChild(spanElement);
  }

  var close = document.getElementsByClassName("close");
  for (let j = 0; j < close.length; j++) {
    close[j].onclick = function () {
      let parentDiv = this.parentElement;
      parentDiv.style.display = "none";
    };
  }
}

function start() {
  document.getElementById("enterButton").addEventListener("click", function () {
    CreateElement();
  });
}
start();
