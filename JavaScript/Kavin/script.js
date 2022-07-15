function _fetchData() {
  fetch("https://www.breakingbadapi.com/api/characters?limit=10").then(
    function (data) {
        console.log(data);
        data.json().then(function (response) {
        console.log(response);
        response.forEach((item) => {
            console.log(item);
            let ele1 = document.querySelector(".name");
            let brk = document.createElement("br");
           

            let ele2 = document.createElement("label");
            ele2.setAttribute("for", item);
            ele2.textContent = item.name;
            ele2.setAttribute("class", "label");   
            ele1.append(ele2);
            ele1.append(brk);
            
            
            let dob = document.createElement("label");
            dob.setAttribute("for", item);
            dob.textContent = item.birthday;
            dob.setAttribute("class", "label");  
            ele1.append(dob);
            
            
            let img = document.createElement("img");
            img.setAttribute("src",item.img)
            img.style.width="50%";
            img.style.height="50%";
            ele1.append(img)
            ele1.append(brk);
        });
      })
    }
  )
}
_fetchData();