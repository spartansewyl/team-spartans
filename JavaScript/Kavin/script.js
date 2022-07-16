function _fetchData() {
  fetch("https://www.breakingbadapi.com/api/characters?limit=10").then(
    function (data) {
        console.log(data);
        data.json().then(function (response) {
        console.log(response);
        response.forEach((item) => {
            console.log(item);
           
            let ele1 = document.querySelector(".content");
            let breakEle = document.createElement("br");

            let img = document.createElement("img");
            img.setAttribute("src",item.img)
            img.style.width="150px";
            img.style.height="200px";
           img.style.marginLeft="30px"
            ele1.append(img);
            ele1.append(breakEle);

            let ele2 = document.createElement("label");
            ele2.setAttribute("for", item);
            ele2.textContent = item.name;
            ele2.setAttribute("class", "label");   
            ele1.append(ele2);
            ele1.append(breakEle);
          
            let nickname = document.createElement("label");
            nickname.setAttribute("for", item);
            nickname.textContent = `Nickname:${item.nickname}`;
            nickname.setAttribute("class", "label");  
            ele1.append(nickname);
            ele1.append(breakEle);
            
            let occupation = document.createElement("label");
            occupation.setAttribute("for", item);
            occupation.textContent = `Occupation:${item.occupation}`;
            occupation.setAttribute("class", "label");  
            ele1.append(occupation);
            ele1.append(breakEle);

            let potrayed = document.createElement("label");
            potrayed.setAttribute("for", item);
            potrayed.textContent = `Potrayed:${item.potrayed}`;
            potrayed.setAttribute("class", "label");  
            ele1.append(potrayed);
            ele1.append(breakEle);

            let status = document.createElement("label");
            status.setAttribute("for", item);
            status.textContent = `Status:${item.status}`;
            status.setAttribute("class", "label");  
            // status.append(status);
            ele1.append(breakEle);

        });
      })
    }
  )
}
_fetchData();
