import { Fragment } from 'react';

const Lista = (props, eliminarPelicula) => {


    return (
        <Fragment>
            <div className="col-8 col-sm-6 col-md-4 col-xl-3 mx-auto mx-md-0 "  >
                <div className="card m-2 shadow-lg border-0" style={{ height: 190 }}>
                    <div className="col-12 d-flex justify-content-end text-center align-items-center">
                        <button className="btn  mt-2 btn-info text-center ms-2 " style={{ height: 28 }} onClick={null}>
                            <i className="bi bi-folder-x"></i>
                        </button>
                        <button className="btn me-3 mt-2 btn-danger ms-2 text-center" style={{ height: 28 }} onClick={() => eliminarPelicula(props.pelicula.id)}>
                            <i className="bi bi-folder-x"></i>
                        </button>
                    </div>

                    <div className='card-body mx-1 d-flex justify-content-between'>
                        <div className=" d-flex flex-column justify-content-between">
                            <h4 className='card-title' >{props.pelicula.titulo}</h4>
                            <p>{props.pelicula.genero}</p>
                            <p>{props.pelicula.ano}</p>
                        </div>
                        <div className="ms-1">
                            <p>{props.pelicula.puntuacion}/10</p>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};
export default Lista;