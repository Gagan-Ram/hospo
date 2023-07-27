import ActionAreaCard from "../General/ActionAreaCard";
import ResponsiveAppBar from "../General/ResponsiveAppBar";
import Search from "../General/Search";
import { Box, Typography } from "@mui/material";

import Dentist from '../../assets/images/Dentist.jpg'
import Gynecologist from '../../assets/images/Gynecologist.jpg'
import Dietitian from '../../assets/images/Dietitian.jpg'
import Physiotherapist from '../../assets/images/Physiotherapist.jpg'
import General_surgeon from '../../assets/images/General_surgeon.jpg'
import homeLogo from '../../assets/images/homeLogo.png'


export default function Home() {


    // const services = [
    //     ["Instant Video Consultaion", "Connect within 60 seconds"],
    //     ["Find Doctors Near You", "Confirmed appointments"],
    //     ["Medicines", "Essentials at your doorstep"],
    //     ["Lab Tests", "Sample pickup at your home"],
    //     ["Surgeries", "Safe and trusted surgery centers"],
    // ];

    const specialties = [
        [Dentist, "Dentist", "Toothing troubles? Schedule a dental checkup"],
        [
            Gynecologist,
            "Gynecologist",
            "Explore a women health, pregnancy, and infertility treatment",
        ],
        [
            Dietitian,
            "Dietitian",
            "Get guidance on eating right, weight management and sports nutrition",
        ],
        [Physiotherapist, "Physiotherapist", "Pulled a muscle? Get it treated"],
        [General_surgeon, "General surgeon", "Need to get operated? Find the right surgeon"],
    ];

    const ClassService = {
        margin: "0px 0px 100px 0px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        // border : '2px solid blue'
    };

    const mainStyle = {
        padding: "40px",
        // border: '2px solid red'
    };

    // const forBackGroundImageInsert = {
    //     backgroundImage: `url(${homeLogo})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'contain',
    //     position: 'absolute',
    //     height: "auto"
    // }

    const imageStyle ={
        width: "100%",
        height: "auto"
    }

    return (
        <>
            <Box>

                <header>
                    <ResponsiveAppBar />
                    <Search />
                </header>

                <main className="main" style={mainStyle}>
                    <Box>
                        <img src={homeLogo} alt="AdImage" width="460" height="500" style={imageStyle} />
                    </Box>
                    {/* {services.map((value, index) => (
                            <ActionAreaCard value={value} border={"true"} />
                        ))} */}
                    {/* </Box> */}

                    <Box>
                        <Typography variant="h5" sx={{ lineHeight: "25px", letterSpacing: "0.074em", mt: 7, ml: 4 }} >
                            <p>Book an appointment for an in-clinic Consultaion</p>
                            <Typography variant="subtitle2" sx={{ letterSpacing: "0.09em", mb: 4 }} >
                                <p>Find experienced doctors across all specialties</p>
                            </Typography>
                        </Typography>

                        <Box style={ClassService}>
                            {specialties.map((value, index) => (
                                <ActionAreaCard value={value} />
                            ))}
                        </Box>
                        <hr />
                    </Box>
                </main >
            </Box >
        </>
    );
}
