import React from 'react';

import Bomberbot from '../../public/images/chat.jpg';
import AirBnB from '../../public/images/tienda.jpg';
import AppLinks from '../../public/images/tabla.jpg';


const Portafolio = () => {

    const [header] = React.useState({
        mainHeader: 'Mis Aplicaciones'
    });

    const [state] = React.useState([
        {
            id: 1,
            imag: Bomberbot,
            heading: 'Chat',
            textService: "Aplicacion en JavaScritp y Html + css y Firebase para chat.",
            url: 'https://github.com/LadyNicoll/Aplicaci-n-de-Chat'
        },
        {
            id: 2,
            imag: AirBnB,
            heading: 'Tienda',
            textService: 'Tienda de ropa realizada en React.',
            url: 'https://github.com/LadyNicoll/Tienda-Online-en-React.'
        },
        {
            id: 3,
            imag: AppLinks,
            heading: 'Tabla de Precios',
            textService: 'Tabla de precios hecha en Html + Css',
            url: 'https://github.com/LadyNicoll/TablaPrecios'
        },
    ]);

    return (

        <div className='portafolio' id="projects">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeader">
                        <div className='commonBorder'></div>
                        <h1>{header.mainHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>

                    <div className="col-12 ">
                        <div className='common'>
                            <p className='mainContentPortafolio'>{header.mainContent}</p>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>
                                {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='portafolio__box'>
                                            <div className='containerImg'>
                                                <img src={info.imag} className='commonImgPort' alt={info.heading}/>
                                            </div>
                                            <div className='portafolio__box-header'>{info.heading}</div>
                                            <div className='portafolio__box-p'>{info.textService}</div>
                                            <div className='seeMore'>
                                                <a href={info.url} target='_blank' className='portafolio__box-url'>
                                                    Ir a la Aplicacion
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portafolio;