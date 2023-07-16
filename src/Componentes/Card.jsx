

const Card = ({superHost,url,type,beds,rating,title}) => {
 
  return (
    <article className="contenedorPrincipal">
      <img className="ImageRoom" src={url} alt="imagen-proyecto" />

      <div className="informacionPrincipal">
        {superHost}
        <p className="typeBeds">{type}.{beds}</p>
        <div className="informacionRating">
          <img className="star" src="src/img/bx-star.svg" alt="" />
          <p>{rating}</p>
        </div>
      </div>

      <p>{title}</p>
    </article>
  );
}

export default Card