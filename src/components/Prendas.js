import React, {useState, useEffect} from 'react';
import Data from '../data.json'
import Error from './Error';
import lupa from '../img/buscar.png';

      const Prendas = () => {
                const [ prendas, setPrendas] = useState([])
                useEffect (()=>{
                  const getPrendas = () =>{
                    const data = Data.map((data) => {
                            return data
                })
                /* console.log(data); */        
                setPrendas(data);
                } 
                getPrendas();    
          }, [])


        const [ termino, setTermino] = useState('');
        const [ error, setError] = useState(false)
      
        const data = Data.map((data) => {
            return data
        })  
            const getSearch = (e) => {
                    e.preventDefault();
                    const result = data.filter(el=> el.name.includes(termino))  
                  if(result.length){
                    setPrendas(result)
                  }else{
                    setError(true);
                    return;
                  }
                  
            
                setError(false)

              setPrendas(result)
            }

            /* console.log(prendas); */
    
return (
    <>

<div className='buscador'>
 
  <form 
    className='searchForm'
    onSubmit={getSearch}
  >
              <div 
                className='input-group'
              >
              <span  className='input-group-btn'>
              <button 
                type='submit' 
                className='search-button'
                                                  
              >
              <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Buscar'
                  onChange={e => setTermino(e.target.value)}
                />
                                              
                <div className='search-img'>
                <img className='lupa' src={lupa} alt='lupa'/>
                </div>
        </button> 
      </span>
    </div>
  </form>

</div>


        {error ? <Error msg='No hay coincidencias de busqueda'/> : 

<div className="row">
 {prendas.map (prenda => (
  <div className="col" key={prenda.id}>
   <div>
    <img src={prenda.imagen} alt='' className="imagen-prenda"/>
     <h4>{prenda.name}</h4>
      {(prenda.precio1 === "")
      ? <p><br></br></p>
      : <p className="precio1">{prenda.precio1} €</p>
      }
      
      {(prenda.precio1 === "")
      ? <p className='precio2B'>{prenda.precio2} €</p>
      : <p className='precio2'>{prenda.precio2} €(-20%)</p> 
      }
      
      {(prenda.parra === '')
      ? <p><br></br></p>
      : <p id='colores'>{prenda.parra}</p>
      }    
      
     <button href="#" className='boton'>Añadir</button>
    </div>
  </div>

  ))}        
        
</div>        
       
}

  </>
);

}
 
export default Prendas;
