import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const characterDetails = localStorage.getItem("breakingBadData") || [];
  const [apiData, setapiData] = useState(JSON.parse(characterDetails) || [""]);
  const [searchCharacter, setsearchCharacter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://www.breakingbadapi.com/api/characters?limit=10"
      );
      let data = await response.json();
      localStorage.setItem("breakingBadData", JSON.stringify(data));
    };
    fetchData();
    return () => {};
  }, [apiData]);

  //delete a specific user by using ther character_id

  const deleteCharacter = (char_id) => {
    let newData = apiData.filter((item) => item.char_id !== char_id);
    setapiData(newData);
    localStorage.setItem("breakingBadData", JSON.stringify(newData));
  };

  //edit user details

  const editcharacterDetails = () => {};

  //search character by name

  const searchCharacterbyname = () => {
    console.log(searchCharacter);
    let newData = apiData.filter((item) => item.name === searchCharacter);
    setapiData(newData);
    localStorage.setItem("breakingBadData", JSON.stringify(newData));
  };

  //sort in ascending order

  const sortAscending = () => {
    let newData = apiData.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    setapiData(newData);
    localStorage.setItem("breakingBadData", JSON.stringify(newData));
  };

  //sort in ascending order

  const sortDescending = () => {
    let newData = apiData.sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    localStorage.setItem("breakingBadData", JSON.stringify(newData));
    setapiData(newData);
   
  };

  return (
    <div>
      <button onClick={() => sortAscending()}>A-Z</button>
      <button onClick={() => sortDescending()}>Z-A</button>
      <input
        type="text"
        value={searchCharacter}
        onChange={(e) => setsearchCharacter(e.target.value)}
        placeholder="search by ChracterName"
      />
      <button onClick={() => searchCharacterbyname()}>search</button>
      {apiData.map((character, i) => (
        <div className="character_container" key={i}>
          <img className="character_image" src={character.img}/>
          <span className="character_name">{character.name}</span>
          <span className="character_birthday">{character.birthday}</span>
          <span className="character_occupation">{character.occupation}</span>
          <div className="buttons">
            <button onClick={() => editcharacterDetails(character.char_id)}>
              Edit
            </button>
            <button onClick={() => deleteCharacter(character.char_id)}>
              Delete character
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
