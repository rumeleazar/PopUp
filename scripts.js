//FUNCTIONS
function closeModal() {
  document.querySelector(".table input[type ='button']").style.display =
    "block";
  document.querySelector(".modal").style.display = "none";
  document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0)";
}

function openModal() {
  document.querySelector(".modal").style.opacity = "1";
  document.querySelector(".modal").style.display = "block";
  document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.7)";
  document.querySelector(".table input[type ='button']").style.display = "none";
}

//OPENING THE POP UP MODAL AT PAGE LOAD

window.addEventListener("load", function () {
  setTimeout(function () {
    openModal();
  }, 2000);
});

//CLOSING THE POP UP MODAL WITH THE CLOSE BUTTON

document.querySelector(".close").addEventListener("click", function () {
  closeModal();
});

//OPENING MODAL USING THE OPEN SURVEY BUTTON

document.querySelector(".openModal").addEventListener("click", function () {
  openModal();
});

//GETTING VALUES FROM FORMS

let yes = [];
let no = [];
let total;

document.querySelector(".submit").addEventListener("click", function () {
  let name = document.querySelector(".name").value;
  let radio = document.querySelector('input[type = "radio"]:checked');
  total = yes.length + no.length + 1;

  if (name === "") {
    alert("Name required");
  } else {
    if (radio.value === "yes") {
      yes.push(name);
      let createP = document.createElement("p");
      let content = document.createTextNode(name);
      createP.appendChild(content);
      document.querySelector(".yeslist").appendChild(createP);
      document.querySelector(".yesnumber").innerHTML = `${yes.length}`;
    } else {
      no.push(name);
      let createP = document.createElement("p");
      let content = document.createTextNode(name);
      createP.appendChild(content);
      document.querySelector(".nolist").appendChild(createP);
      document.querySelector(".nonumber").innerHTML = `${no.length}`;
    }

    closeModal();

    document.querySelector(".totalnumber").innerHTML = total;
  }
});
