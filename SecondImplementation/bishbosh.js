const element = document.getElementById("myBtn");
const divElement = document.getElementById("resultO");
element.addEventListener("click", myFunction);

function myFunction() {
  divElement.innerHTML = "";
  let bishNumber = parseInt(document.getElementById("Bish").value);
  let boshNumber = parseInt(document.getElementById("Bosh").value);
  let MaxNumber = parseInt(document.getElementById("MaxNum").value);

  let resultContainer = document.getElementById("resultO");

  for (let i = 1; i <= MaxNumber; i++) {
    var elementLi = document.createElement("li");
    if (i % bishNumber == 0 && i % boshNumber == 0) {
      elementLi.innerText = "Bish-Bosh";
      resultContainer.appendChild(elementLi);
    } else if (i % bishNumber == 0) {
      elementLi.innerText = "Bish";
      resultContainer.appendChild(elementLi);
    } else if (i % boshNumber == 0) {
      elementLi.innerText = "Bosh";
      resultContainer.appendChild(elementLi);
    } else {
      elementLi.innerText = i;
      resultContainer.appendChild(elementLi);
    }
  }
}
