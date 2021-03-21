import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithubAlt} from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footerSection'>
                    <div className='footerSection-logo'></div>
                    <div className='row informationFootfer justifyContent'>
                        <div>
                            Lo que puedes imaginar lo puedes programar!
                        </div>
                        <div className='aboutCircles'>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer