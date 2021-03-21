import React from 'react'


const Contact = () => {
    const [header] = React.useState({
        subHeader: 'Contactanos  ;)',
        p1: 'Servicios en desarrollo 100% garantizados.',
        p2: 'con una amplia trayectoria desarrollando aplicaciones.'
    });

    const [state] = React.useState([

        { id: 2, title: 'Correo:', text: 'lanai@gmail.com' },
        { id: 3, title: 'Telefono:', text: '+593 98 618 6762' },

    ])

    return (
        <div className='contact' id="contact">
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-12 mainHeaderContact">
                        <div className='commonBorder'></div>
                        <h1>{header.subHeader}</h1>
                        <div className='commonBorder'></div>
                    </div>
                    <div className="col-12 centerContent">
                        <div className='common'>
                            <p className='about__info-p1'>{header.p1}</p>
                            <p className='about__info-p2'>{header.p2}</p>
                        </div>
                    </div>
                    <div className="col-12 centerContent">
                        <div className='common info_contacts '>
                            {state.map(info => (
                                <div>
                                    <strong>{info.title}</strong>
                                    <p>{info.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact