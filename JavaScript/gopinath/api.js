const information=document.getElementById("information")
function _getinformation(){
    const infoUrl="https://www.breakingbadapi.com/api/characters?limit=10";
    function _resolvejson(data){
        return data.json();
    }
    function _getdata(result){
        console.log(result);
        result.forEach((item)=>{
            let info={};
            info['name']=item.name;
            info['img']=item.img;
            info['birthday']=item.birthday;
            info['occupation']=item.occupation;
            displayinfo(info);
        });
        function displayinfo(info){
            console.log(info)
            const infoHTML=(info)=>{`
            <li>
               <img src='${info.img}'/>
               <p>${info.name}</p>
            </li>  
               `}
               information.innerHTML=infoHTML;
        }
    }
    try{
       (fetch(infoUrl).then(_resolvejson).then(_getdata))
    }
    catch(err){

    }
}
_getinformation();