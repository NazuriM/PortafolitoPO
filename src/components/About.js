import React from 'react'

import Fotito from '../../public/images/nosotras.jpeg';

const About = () => {
    const [header] = React.useState({
        subHeader: 'Sobre nosotras',
        mainContent: 'Holaa Somos dos estudiantes de la carrera Ingeniería en Software, estamos muy felices de que estés aquí, nos encanta aprender y esperamos poder ayudar en lo que requiera.'
    });
    return (

        <div className='about' id="about">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeader">
                        <div className='commonBorder'></div>
                        <h1>{header.subHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>
                    <div className="col-12 col-lg-4 centerContent">
                        <img className='imgAbout' src={Fotito} alt={header.mainContent} />
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <div className='common'>
                            <p className='mainContent'>{header.mainContent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About