import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.959948592711!2d-118.15605658494668!3d34.14736678058016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c37405a05c73%3A0xb163586b3ff6213d!2s74%20N%20Pasadena%20Ave%2C%20Pasadena%2C%20CA%2091124!5e0!3m2!1sen!2sus!4v1584068563393!5m2!1sen!2sus" 
                    width="100%" 
                    height="500px" 
                    frameborder="0" 
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabindex="0"
                    title="myFrame">
            </iframe>
        </div>
    );
};

export default Location;