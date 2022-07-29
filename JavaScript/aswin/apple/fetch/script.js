fetch('https://www.breakingbadapi.com/api/characters?limit=10').then((code) =>{
    return code.json();
}).then((storeCode) => {
    let data = "";
storeCode.map((value)=> {
    data+=`<div class="border">
    <div class="name">
    ${value.name}
    </div>
    <img class="image" src="${value.img}">
    <div class="power1">${value.occupation}</div>
    <div class="power2">${value.nickname}</div>
    <div class="power3">${value.category}</div>
</div>`;

})
document.querySelector(".border").innerHTML=data;
})


