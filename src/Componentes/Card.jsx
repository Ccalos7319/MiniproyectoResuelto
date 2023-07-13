

const Card = ({superHost,url,type,rating,title}) => {
  
  return (
    
    <article className="contenedorPrincipal">

       
          <img src={url} alt="imagen-proyecto" />
        
        <div className="informacionPrincipal">
            <p>{superHost}</p>
            <p>{type}</p>
            <div className="informacionRating">
              <img className="star"src="src/img/bx-star.svg" alt="" />
              <p>{rating}</p>
            </div>
            
        </div>
         
          <p>{title}</p>
        
        
    
      
    </article>
  
  )
}

export default Card