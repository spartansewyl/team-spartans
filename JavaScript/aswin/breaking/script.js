function _breakinBad(){
    const breakingUrl ='https://www.breakingbadapi.com/api/characters?limit=10';
    try{
        fetch(breakingUrl).then(function(data){
            data.json().then(function(results){
                console.log(results)
                results.forEach((coco) => {
                    console.log(coco.name)
                });
            })
        });
    } catch (err) {
        
    }
}
_breakinBad();