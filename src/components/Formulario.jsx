import { Fragment, useRef } from "react"
import uuid4 from "uuid4";
import Lista from './Lista';




const Formulario = (props) =>{

     
        const tituloRef = useRef();
        const anoRef = useRef()
        const generoRef = useRef()
        const puntuacionRef = useRef()
    
    
        /* para agregar una pelicula */
    
        const agregarPelicula = () => {
            const titulo = tituloRef.current.value.trim();
            const ano = anoRef.current.value.trim()
            const genero = generoRef.current.value.trim()
            const puntuacion = puntuacionRef.current.value.trim()
    
            if (titulo == '')
                return alert("titulo no puede estar vacio");
            if (ano > 2025 || ano == "" || isNaN(ano))
                return alert("Ingresa un año valido")
            if (genero == 0)
                return alert("selecciona un genero")
            if (puntuacion > 10 || puntuacion < 1)
                return alert("la puntuacion debe ser entre 1 y 10")
            props.setPeliculas((prevPeliculas) => {
                const nuevaPelicula = {
                    id: uuid4(),
                    titulo: titulo,
                    ano: ano,
                    genero: genero,
                    puntuacion: puntuacion
                }
                limpiarCampos()
                return [...prevPeliculas, nuevaPelicula]
            })
    
        }
    
    
       /*  para limpiar los campos del input */
        const limpiarCampos = () => {
            tituloRef.current.value = null
            anoRef.current.value = null
            generoRef.current.value = 0
            puntuacionRef.current.value = null
        }
    
    
       
    


    return(
        <Fragment>
             <div className="mt-5">
                <h5>Agregar película</h5>
                <div className="input-group mt-4">
                    <input
                        type="text"
                        placeholder="Titulo"
                        className="form-control"
                        ref={tituloRef}

                    />
                   
                </div>
                <div className="input-group my-2">
                    <input
                        type="text"
                        placeholder="Año"
                        className="form-control"
                        ref={anoRef}
                    />
                </div>
                <div className="input-group my-2">
                    <select className='form-select' ref={generoRef} >
                        <option value="0">Genero</option>
                        <option value="Terror">Terror</option>
                        <option value="Acción">Acción</option>
                        <option value="Ciencia ficcion">Ciencia ficcion</option>
                        <option value="Fantasia">Fantasia</option>
                        <option value="Romance">Romance</option>

                    </select>
                </div>
                <div className="input-group my-2">
                    <input
                        type="text"
                        placeholder="Puntuacion"
                        className="form-control"
                        ref={puntuacionRef}
                    />
                </div>
                <div className="me-1 mt-2">
                    <button className="btn btn-success ms-2" onClick={agregarPelicula}>
                        Enviar
                    </button>
                    <button className="btn btn-secondary ms-2" onClick={limpiarCampos}>
                        Limpiar
                    </button>
                </div>
            </div>


            
          
        

        </Fragment>
    )
}   
export default Formulario