import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Componentes/Card";
import Nav from "./Componentes/Nav";


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");

      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
    
  };
  
  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);


  const [filtered, setFiltered] = useState(data);
  const handleChange =(e) => {
    let keyWord = e.target.value.toLowerCase();
      let arr = data.filter( apartament => {
        let name =apartament.city.toLowerCase();
        return name.includes(keyWord);
  
      })
      setFiltered(arr);
 
  }

  return (
    <>
     <Nav handleChange={handleChange} />
    <section className="contenedor">
        {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
       
      <div className="contenedor-cajas">
        <h1>Stays in Finland</h1>
            <div className="work__projects">   
                {
                  filtered.map((el, i) =><Card key={ i}  url={el.photo} superHost ={el.superHost} type={el.type} rating={el.rating} title={el.title}/>)
                  
                }
            </div>
       
      </div>
    </section>
    </>
    
  );
}

export default App;
