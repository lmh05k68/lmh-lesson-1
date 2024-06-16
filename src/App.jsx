import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import Modal from "./components/modal";
import {useEffect} from 'react'
function App() {
  const pokemons = [
    {
      id: "#0001",
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      image: "./003-Gmax.png",
    },
    {
      id: "#0002",
      name: "Ivysaur",
      types: ["Grass", "Poison"],
      image: "./003-Mega.png",
    },
    {
      id: "#0003",
      name: "Venusaur",
      types: ["Grass", "Poison"],
      image: "./003.png",
    },
    { id: "#0004", name: "Charmander", types: ["Fire"], image: "./004.png" },
    {
      id: "#0005",
      name: "Charmeleon",
      types: ["Fire"],
      image: "./006-Gmax.png",
    },
    {
      id: "#0006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      image: "./006.png",
    },
    {
      id: "#0007",
      name: "Squirtle",
      types: ["Water"],
      image: "./006-Mega-X.png",
    },
    {
      id: "#0008",
      name: "Wartortle",
      types: ["Water"],
      image: "./006-Mega-Y.png",
    },
    { id: "#0009", name: "Blastoise", types: ["Water"], image: "./007.png" },
    { id: "#0010", name: "Caterpie", types: ["Bug"], image: "./009.png" },
    { id: "#0011", name: "Metapod", types: ["Bug"], image: "./009-Gmax.png" },
    {
      id: "#0012",
      name: "Butterfree",
      types: ["Bug", "Flying"],
      image: "./009-Mega.png",
    },
  ];
 
  const listClass={};
  pokemons.forEach((po)=>{
    listClass[po.types] = 1;
  })
  const [data, setData] = useState(pokemons);
  const [crrData, setCrrData] = useState(null);
  const [pokeSearch, setPokeSearch] = useState("");
  const [updateData,setUpdateData] = useState('');
  const [filterTypes, setFilterTypes] = useState({})
  const handleSave = () => {
    const index = data.findIndex(item => item.id === crrData.id);
    if(index > -1){
      data[index]={
        ...data[index],
        ...crrData
      };
      setData([...data]);
      setCrrData(null);
      
    }
  }

 
    const filteredPokemon = pokemons.filter((item)=>{
      return item.name.toLowerCase().includes(pokeSearch.toLowerCase())
     });
    
     const filterTypeValues = {}
     pokemons.forEach(types =>{
      types.types.forEach(type=>{
        if(!filterTypeValues[type] ){
          filterTypeValues[type] = true
        }
      })
     })
     useEffect(()=>{
      setFilterTypes(filterTypeValues)
     },[])

     setFilterTypes(filterTypeValues)
     const handleChangeFilter = (key) =>{
      setFilterTypes((prev)=>{
        const newFilter = {
          ...prev,
          [key]:!prev[key]
        }
        return newFilter
      })
     }
  
  let showModal = null;
  if (crrData) {
    showModal = (
      <Modal
        poke={crrData}
        onClose={() => {
          setCrrData(null);
        }}
        onChangePokemon = {(pokemon) =>{
          setCrrData(pokemon)
        }}
        onSave = {() =>{
          setData(crrData);
          setCrrData(null)
        }}
      />
    );
  }
  return (
    <>

      <div className="search_wrapper">
      <input type="text" value={pokeSearch} onChange={(e)=>setPokeSearch(e.target.value)}/>
      <button >Search</button> 
      </div>
      <div className="filter">
        <h2>Lọc theo hệ</h2>
      </div>
      <div className="listCheckbox">
        {Object.keys(filterTypes).map(key=>{
          return <p className="item">
          <input type="checkbox" id={key} value={pokeSearch} onChange={(e)=>setPokeSearch(e.target.value)}></input>
          <label htmlFor={key}>{key}</label>
        </p>
        })}
       
      </div>
   
      <div className="card_wrapper">
        {
          filteredPokemon.length > 0 ? filteredPokemon.map((data) => { return (<Card key={data.id} name={data.name} id={data.id} img={data.image} types={data.types}
                onClick={() => {
                  setCrrData(data);
                }}
              />
            )
          }) :
          <h1>No data</h1>
}
       
        {showModal}
      </div>


    </>
  );
}
export default App;
