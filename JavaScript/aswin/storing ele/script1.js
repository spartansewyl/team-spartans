const internForm = document.getElementById("internForm");
const internContainer = document.querySelector(".intern");
const nameInput = internForm["name"];
const idInput = internForm["id"];
const passwordInput = internForm["password"];



const intern = JSON.parse(localStorage.getItem("intern")) || [];

const addIntern = (name, id, password) => {
  intern.push({
    name,
    id,
    password,
  });

  localStorage.setItem("intern", JSON.stringify(intern));

  return { name, id, password };
};

const createInternElement = ({ name, id, password }) => {
  const internDiv = document.createElement("div");
  const internName = document.createElement("h2");
  const internId = document.createElement("p");
  const internPassword = document.createElement("p");

  internName.innerText = "Intern name: " + name;
  internId.innerText = "Intern id: " + id;
  internPassword.innerText = "Intern password: " + password;

  internDiv.append(internName, internId, internPassword);
  internContainer.appendChild(internDiv);

  internContainer.style.display = intern.length === 0 ? "none" : "flex";
};

internContainer.style.display = intern.length === 0 ? "none" : "flex";

intern.forEach(createInternElement);

function myFunction () {
  let x = document.getElementById("password");
  if(x.type === "password"){
    x.type = "text";
  }else{
    x.type = "password";
  }
}

internForm.onsubmit = e => {
  e.preventDefault();

  const newIntern = addIntern(
    nameInput.value,
    idInput.value,
    passwordInput.value
  );

  createInternElement(newIntern);

  nameInput.value = "";
  idInput.value = "";
  passwordInput.value = "";
};
