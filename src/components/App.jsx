import { Fragment, useEffect, useState } from 'react';
import Formulario from './Formulario'
import Lista from './Lista';

const App = () => {
    /*  datos para cargar como ejemplo */
    const [peliculas, setPeliculas] = useState([
        { id: 1, titulo: "El aro", ano: 2002, genero: "Terror", puntuacion: 7 },
        { id: 2, titulo: "El origen", ano: 2010, genero: "Ciencia ficción", puntuacion: 8 },
        { id: 3, titulo: "Star wars: episodio III", ano: 2005, genero: "Ciencia ficción", puntuacion: 3 },
        { id: 4, titulo: "Crepúsculo", ano: 2008, genero: "Romance", puntuacion: 5 },
    ]);
    const [editarPelicula, setEditarPelicula] = useState(null)




    /*   no supe como resolver el editar */
    useEffect(() => {

        if (editarPelicula !== null) {
            setEditarPelicula(editarPelicula)
        } else {

        }

    }, [editarPelicula])
    const editar = pelicula => {

    }




    /* para eliminar peliculas */
    const eliminar = (id) => {
        console.log(id)
        const eliminado = window.confirm('Desea eliminar la pelicula?')
        if (eliminado) {
            const nuevaPelicula = peliculas.filter(pelicula => pelicula.id !== id)
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

            {/* componente formulario */}
            <Formulario setPeliculas={setPeliculas} />

            {/*   //componente Lista */}
            <div className=" d-flex align-content-start flex-wrap mt-5 ">
                {peliculas.map((pelicula) => (
                    <Lista key={pelicula.id} pelicula={pelicula} eliminar={eliminar} setEditarPelicula={setEditarPelicula} />

                ))}
            </div>


        </Fragment>
    )

}





export default App;