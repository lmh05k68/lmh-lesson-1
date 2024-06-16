import './card.css'

const Card = (props) => {




 return   <>

     <div className={"card"} onClick={props.onClick} >
        <img src={props.img} alt="" />
       <p className="pokemon_id">{props.id}</p>
        <h2 className="pokemon_name">{props.name}</h2>
        <div className="pokemon_class_wrapper">
            {
                props.types.map((type_,idx) =>{
                    return(
                        <span className={type_} key={idx}>{(type_)}</span>
                    )})
                }    

        </div>
    </div>
 

    
    </>
    
}
export default Card