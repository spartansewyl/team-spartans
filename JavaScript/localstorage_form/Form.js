let storDetails = [];
let display = document.querySelector(".display");

function storeDetails(details) {
  storDetails.push(details);
  localStorage.setItem("StudentDetails", JSON.stringify(storDetails));
  displayDetails();
}

function getDetails() {
  let emailValue = document.querySelector(".Email").value;
  let Password = document.querySelector(".Password").value;
  let PhoneNumber = document.querySelector(".PhoneNumber").value;
  if (emailValue !== '') {
    storeDetails({ emailValue, Password, PhoneNumber });
  }else {
    alert("Enter all the values")
  }
  
}

function displayDetails() {
  let htmlData;
  let studentData = JSON.parse(localStorage.getItem("StudentDetails"));
  if (studentData != null) {
    htmlData = studentData.map((element,i) => {
      return `<div class="${i}" ><span>${element.emailValue}</span><br>
      <span>${element.Password}</span><br>
      <span>${element.PhoneNumber}</span><br>
      <button onclick="deleteDetail(event)">Delete</button><br></div>`;
    }).join("");
  }
  display.innerHTML = htmlData;
}
displayDetails();

function deleteDetail(params) {
    let x = params.target;
    let y = x.parentElement.className
    let z = document.getElementsByClassName(y);
    z.remove();
}
