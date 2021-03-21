import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';


const Banner = () => {
    const [state] = React.useState({
        title: 'Hola, somos',
        text: "Developers Girls"
    });
    return (
        <div>
            {/* <header className='header'> */}
            <div className='container-fluid header' id="banner">
                <div className='row'>
                    <div className='col-12'>
                        <div className='header__section'>
                           
                            <h1>{state.title}</h1>
                            <p className="text__title">{state.text}</p>
                            <p className='text__skill'>{state.skill}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </header> */}

        </div>
    )
}

export default Banner;