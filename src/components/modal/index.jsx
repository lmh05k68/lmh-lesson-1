import React from 'react'
import "./styles.css"
const Modal = (props) => {
  return (
    <div className="modal">
      <div className="content">
        <button onClick={props.onClose} className="close-btn">Close</button>
        <img src="003.png"></img>
        <br/>
        <div>
            <span>Ten pokemon: </span><input type="text" value={props.poke.name} onChange={(e)=>{
              const newPokemon = {
                ...props.pokemon,
                name: e.target.value
              }
              props.onChangePokemon(newPokemon)
            }}/>
        </div>
        <br/>
        <div>
            <span>He: </span>
            <select value={props.poke.types}>
                <option value="">Lua</option>
                <option value="">Nuoc</option>
                <option value="">Khi</option>
                <option value="">Dat</option>
            </select>
        </div>
        <br/>
        <div>
            <span>Id:</span><input type="text" value={props.poke.id}></input>
        </div>
        <button className="save" onClick={props.onSave}>Lưu</button>
      </div>
    </div>
   
  )
}

export default Modal

