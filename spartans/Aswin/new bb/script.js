fetch('https://www.breakingbadapi.com/api/characters?limit=10').then((data) => {

    //console.log(data);
    return data.json();
    
}).then((completetheproject) => {


  /*  console.log(completetheproject[2].title);
    document.getElementById('root').
    innerHTML=completetheproject[2].title;*/
    let data1="";
    completetheproject.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">
            ${values.name}
        </h1>
        <img  class="img" src=${values.img} alt="img">
        <p>
            ${values.nickname}
        </p>
        <p class="category">
          ${values.status}
        </p>
        <p class="price">
            ${values.birthday}
        </p>
    </div>`;
    });
    document.getElementById("cards").innerHTML=data1;

}).catch((error)=>{
    console.log(error);
})
function storing((info))




function getDetails(event) {
    event.preventDefault();
     const data =document.querySelector('.username').value;
     document.querySelector('.username').value=''
     APIFetch();
    }
    function storingInLocalStg(gotdata) {  
         pusinguserdetails.push(gotdata)
        localStorage.setItem('userName',JSON.stringify(pusinguserdetails));
       displayData();  
    }
    function displayData(pokeData)
    {
       let allPokemonData = document.querySelector('recieveddata');
    
        let dataContainer =document.createElement("div")
    
    
        let nameContainer =document.createElement("h4")
    
        nameContainer =pokeData.name
        console.log(nameContainer)