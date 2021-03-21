import React from 'react';

import { FaUser} from "react-icons/fa";

const Con = () => {
    const [header] = React.useState({
        mainHeader: 'Comentarios',
        subHeader: '',
        mainContentx: ""
    });

    const [state] = React.useState([
        {
            id: 1,
            icon: <FaUser className='commonIcons' />,
            heading: 'Kim Saiyu',
            textService: <textarea name="mainHeard" rows="3" cols="25">Espero siguan avanzando</textarea>
        },
        {
            id: 2,
            icon: <FaUser className='commonIcons' />,
            heading: 'Marco Julio',
            textService: <textarea name="mainHeard" rows="3" cols="25">Me gustaron sus servicios chicas</textarea>
        },
        {
            id: 3,
            icon: <FaUser className='commonIcons' />,
            heading: 'Maluma',
            textService: <textarea name="mainHeard" rows="3" cols="25">Excelente</textarea>
        }

    ]);

    return (


        <div className='services' id="services">
            <div className='container'>
                <div className='row d-flex'>

                    <div className="col-12 mainHeaderServices">
                 
                        <h1>{header.mainHeader}</h1>
           
                    </div>


                    <div className="col-12 centerContent">
                        <div className='common'>
                            <p className='mainContentServices'>{header.mainContent}</p>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>

                            {state.map(info => (
                                    <div className='colu-4'>
                                        <div className='services__box'>

                                            <div>{info.icon}</div>
                                            <div className='services__box-header'>{info.heading}</div>
                                            <div className='services__box-p'>{info.textService}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Con;