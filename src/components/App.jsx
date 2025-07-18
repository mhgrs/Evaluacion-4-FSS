import { Fragment, useEffect, useRef, useState } from 'react';
import uuid4 from "uuid4";
import Lista from './Lista';

const App = () => {

    const [peliculas, setPeliculas] = useState([
        { id: 1, titulo: "El aro", ano: 2002, genero: "Terror", puntuacion: 7 },
        { id: 2, titulo: "El origen", ano: 2010, genero: "Ciencia ficción", puntuacion: 8 },
        { id: 3, titulo: "Star wars: episodio III", ano: 2005, genero: "Ciencia ficción", puntuacion: 3 },
        { id: 4, titulo: "Crepúsculo", ano: 2008, genero: "Romance", puntuacion: 5 },
    ]);

    const errorTituloRef = useRef()
    const tituloRef = useRef();
    const anoRef = useRef()
    const generoRef = useRef()
    const puntuacionRef = useRef()

    const agregarPelicula = () => {
        const titulo = tituloRef.current.value.trim();
        const ano = anoRef.current.value.trim()
        const genero = generoRef.current.value.trim()
        const puntuacion = puntuacionRef.current.value.trim()

        if (titulo == '') 
            return alert("titulo no puede estar vacio");
        if (ano>2025 || ano == "" || isNaN(ano))
            return alert("Ingresa un año valido")
        if (genero == 0)
            return alert("selecciona un genero")
        if(puntuacion >10 || puntuacion <1)
            return alert("la puntuacion debe ser entre 1 y 10")        
        setPeliculas((prevPeliculas) => {
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

    const limpiarCampos = () => {
        tituloRef.current.value = null
        anoRef.current.value = null
        generoRef.current.value = 0
        puntuacionRef.current.value = null
    }

    const eliminarPelicula = (id) => {
        console.log(id)
        const eliminado = window.confirm("Seguro que desea eliminar?")

        if (eliminado) {
            peliculas.filter(pelicula => pelicula.id !== id)
            setPeliculas(nuevaPelicula)
        }
    }

    const KEY = 'peliculas'
    useEffect(() => {
        const storedPeliculas = JSON.parse(localStorage.getItem(KEY))
        if (setPeliculas) setPeliculas(storedPeliculas);
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(peliculas))
    }, [peliculas])


    return (
        <Fragment>
            <h1 className="display-5 my-3">Películas favoritas</h1>
            <div className="mt-5">
                <h5>Agregar película</h5>
                <div className="input-group mt-4">
                    <input
                        type="text"
                        placeholder="Titulo"
                        className="form-control"
                        ref={tituloRef}

                    />
                    <label ref={errorTituloRef}></label>
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
                        Agregar
                    </button>
                    <button className="btn btn-secondary ms-2" onClick={limpiarCampos}>
                        Limpiar
                    </button>
                </div>
            </div>




            {/*   //componente Lista */}
            <div className=" d-flex align-content-start flex-wrap mt-5 ">
                {peliculas.map((pelicula) => (
                    <Lista key={pelicula.id} pelicula={pelicula} eliminarPelicula={eliminarPelicula} />

                ))}
            </div>


        </Fragment>
    )

}





export default App;