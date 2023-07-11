

const Card = ({superHost,url,type,rating,title}) => {
  
  return (
    
    <article className="project">
    <img src={url} alt="imagen-proyecto" />
    <p>{superHost}</p>
    <p>{type}</p>
    <p><img className="star"src="src/img/bx-star.svg" alt="" />{rating}</p>
    <p>{title}</p>
    </article>
  
  )
}

export default Card