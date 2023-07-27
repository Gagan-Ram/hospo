import React from 'react'

import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

import doctorImage from '../../assets/images/doctorImage.png'

export default function DoctorsCard({ value, setDoctId }) {
    // console.log(value);

    // const [display, setDisplay] = useState("none");


    const appointmentBook = (event) => {
        setDoctId(event.target.value)
        // console.log("!!!!!!!!!!!!!!!!!!!! " + doctId)
        // setDisplay(!display)
    };

    return (
        <>
            <Card sx={{ maxWidth: 750,p:2, m:0.15 }}>
                <CardActionArea sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }} >
                    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
                        <CardMedia 
                            sx={{ width: "160px", borderRadius: "100px" }}
                            component="img"
                            height="140"
                            image={doctorImage}
                            alt="green iguana"
                        />

                        <CardContent style={{textAlign:"left", width:'200px' }} >
                            <Typography gutterBottom variant="h5" textColor="primary" component="div">
                                {value.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary"  >
                                {
                                    value.specializations.map((spec, i) => (
                                        <span>{spec} </span>
                                    ))
                                }
                                <br />
                                {value.experience[0]} years experience overall
                                <br />
                            </Typography>

                            <p>{value.practices_at}</p>

                            &#8377;{value.fee}  Consultation fee at clinic
                        </CardContent>
                    </Box>
                    <Box  >
                        <Button variant="contained" sx={{ width: "15em" }} value={value._id} onClick={appointmentBook} >
                            Book FREE Clnic Visit
                        </Button>
                    </Box>
                </CardActionArea>
            </Card>

        </>
    )
}
