import React, { Component } from 'react';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc:[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ],
    linkto:['http://google.com','http://google.com','http://google.com']
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        title
                    </div>
                
                </div>
            </div>
        ))
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        boxes
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Pricing;