import React from 'react';
import MultipleItems from './MultipleItems';
import ResponsiveAppBar from '../General/ResponsiveAppBar';

import Typography from '@mui/material/Typography';

import medicine_advertisement_background_image from '../../assets/images/medicine_advertisement.jpg'

export default function Medicines() {

    const specialties = [
        ['Dentist', 'Toothing troubles? Schedule a dental checkup'],
        ['Gynecologist', 'Explore a women health, pregnancy, and infertility treatment'],
        ['Dietician', 'Get guidance on eating right, weight management and sports nutrition'],
        ['Physiotherapist', 'Pulled a muscle? Get it treated'],
        ['General surgeon', 'Need to get operated? Find the right surgeon']
    ]

    const slideToShow = 1;

    const Styles = {
        mainStyle :{
            padding: "40px",
        },

        medicine_advertisement :{
            width: "100%",
            backgroundImage: `url(${medicine_advertisement_background_image})`
    }

    };

    
    // const bodyStyle = { background: "#5090D3" }
    return (

        // <div style={bodyStyle}>
            <div>
            <header>
                <ResponsiveAppBar />
            </header>

            <main className="main" style={Styles.mainStyle}>
                <div>
                    < MultipleItems specialties={specialties} slideToShow={slideToShow} autoplay={true} />
                </div>

                <div style={{margin: '75px 0px'}}>
                    <Typography variant="h5" >
                        Browse medicines & health products
                    </Typography>  
                    <p>
                    Popular Products
                    </p>
                </div>

                <div style={{margin: "0px 0px 50px 0px",display: "flex", justifyContent: "space-between", flexWrap: "wrap" }} >

                    <div style={{width: "45%" }}>
                        <Typography variant="overline" >
                            INTRODUCING CONSULTATION DESK
                        </Typography>
                        
                        <Typography variant="h6" >
                            Don’t self medicate. Talk to an expert. Consult a doctor in less than 2 minutes.
                        </Typography>
                    </div>
                    <div style={{width: "45%" }}>
                        <Typography variant="overline" >
                            INTRODUCING FAST DELIVERY
                        </Typography>
                        
                        <Typography variant="h6" >
                            Tired of waiting in a queue? Too weak to go down and buy medicines?
                        </Typography>
                    </div>

                </div>

                <div style={Styles.medicine_advertisement}>

                    <img src='' alt='medicine_advertisement' />

                </div>

            </main>


        </div>
    )
}
