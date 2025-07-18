import { Fragment } from 'react';
import App from '/App'

import uuid4 from "uuid4";

const Agregar = (props) => {

     const AgregarPelicula = () => {
        const titulo = tituloRef.current.value.trim();
        const ano = anoRef.current.value.trim()
        const genero = generoRef.current.value.trim()
        const puntuacion = puntuacionRef.current.value

        if (titulo == '') return;

        setPeliculas((prevPeliculas) => {
            const nuevaPelicula = {
                id: uuid4(),
                titulo: titulo,
                ano: ano,
                genero: genero,
                puntuacion: puntuacion
            }

            return [...prevPeliculas, nuevaPelicula]
        })

    }
    const tituloRef = props.useRef();
    const anoRef = useRef()
    const generoRef = useRef()
    const puntuacionRef = useRef()


    return (

        <Fragment>
            <div className="mt-5">
                <h4>Agregar película</h4>
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
            </div>
            <button className="btn btn-success ms-2" onClick={AgregarPelicula}>
                <i className="bi bi-folder-plus"></i>
            </button>
        </Fragment>

    )
}

export default Agregar