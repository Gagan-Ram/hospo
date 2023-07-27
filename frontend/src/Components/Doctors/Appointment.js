import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Button from '@mui/material/Button';

import Stack from "@mui/material/Stack";
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';

import doctorImage from '../../assets/images/doctorImage.png'
import hospitalImage from '../../assets/images/hospitalImage.jpg'

import { useEffect } from "react";

import { config } from '../../App';
import axios from "axios";
import { useState } from "react";
import { useSnackbar } from 'notistack'

export default function Appointment(props) {
    const { enqueueSnackbar } = useSnackbar();

    const url = window.location.pathname;
    let valuesFromURL = url.split("=");
    // console.log(valuesFromURL)

    const [doctor, setDoctor] = useState([])
    const [hospital, setHospital] = useState([])

    let arr = []

    for (let i = 1; i < valuesFromURL.length; i++) {
        const x = valuesFromURL[i].split('&')
        const reqValuesFromUrl = x[0]
        arr.push(reqValuesFromUrl)
    }
    // console.log(arr[0])


    useEffect(() => {

        const api = `${config.endpoint}doctors/${arr[0]}`;
        const hospitalApi = `${config.endpoint}hospitals?hospitalKey=${arr[0]}`;
        // console.log(api);

        axios.get(api)
            .then((res) => {
                setDoctor(res.data)
            })
            .catch((err) => {
                enqueueSnackbar("Check your internet connection please.", { variant: "error" })
                })
                

        axios.get(hospitalApi)
            .then((res) => {
                setHospital(res.data)
            })
            .catch((err) => {
                enqueueSnackbar("Check your internet connection please.", { variant: "error" })
                })
        // eslint-disable-next-line react-hooks/exhaustive-deps        
    }, [])


    const bookNow = (event) => {
        const hospital = document.getElementById("hospitalDetails");
        const hospitalName = hospital.getAttribute("name");
        const hospitalAddress = hospital.getAttribute("address");
        const body = {
            doctorId: arr[0],
            doctorName: event.target.value.split(",")[0],
            time: arr[1],
            hospitalName: hospitalName,
            hospitalAddress: hospitalAddress,
            fee: event.target.value.split(",")[1]
        };
        // console.log(body);

        const appointmentApi = `${config.endpoint}appointments `
        axios.post(appointmentApi, body)
            .then((res) => {
                // console.log(res)
                enqueueSnackbar("Appointment Booked successfully, redirecting to Home page", { variant: "success" })
                setTimeout(()=>{
                    window.location = `${window.location.origin}`
                }, 2500 )
            })

    };

    return (

        <>
            {
                doctor.map((value, index) => (
                    <Box style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", height: "100vh" }}>
                        <Stack spacing={5} sx={{ margin: "25px" }}>
                            <Card sx={{ maxWidth: 425, padding: "15px" }}  >
                                <Typography variant="h6" display="block" gutterBottom >
                                    <span style={{ position: "relative", top: 5 }}>
                                        <LocalHospitalRoundedIcon color='primary' />
                                    </span>
                                    In-clinic Appointment
                                </Typography>
                                <hr />
                                <Typography variant="h6" gutterBottom sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <span>
                                        &#8377;{value.fee}
                                    </span>
                                    <span>
                                        @{" "}{arr[1]}
                                    </span>
                                </Typography>
                                <hr />

                                <CardActionArea sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <CardMedia
                                        sx={{ width: "160px", borderRadius: "100px" }}
                                        component="img"
                                        height="140"
                                        image={doctorImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {value.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {value.education[0]} <br />
                                            {value.specializations.map((spec, key) => (
                                                <span >
                                                    {spec},
                                                </span>
                                            ))}
                                            <br />
                                            {value.practices_at}
                                        </Typography>
                                    </CardContent>

                                </CardActionArea>
                                <hr />

                                {
                                    hospital.map((value, index) => (

                                        <CardActionArea sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <CardMedia
                                                sx={{ width: "160px" }}
                                                component="img"
                                                height="140"
                                                image={hospitalImage}
                                                alt="green iguana"
                                            />
                                            <CardContent id="hospitalDetails" name={value.name} address={value.address} >
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {value.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {value.address}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    ))
                                }
                            </Card>
                        </Stack>

                        <Stack spacing={5} sx={{ margin: "25px" }}>
                            <Card sx={{ minWidth: 425, padding: "15px" }}>
                                <Box sx={{ position: "relative", left: "25px" }}>
                                    <Typography variant="h5" sx={{ fontStyle: "italic" }} display="block" gutterBottom>
                                        Book here
                                    </Typography>
                                    <Typography variant="caption" gutterBottom>
                                        Get an instant appointment
                                    </Typography>
                                    <br />
                                    <Typography variant="caption" gutterBottom>
                                        Click on the below button to proceed.
                                    </Typography>
                                    <br />
                                    <br />
                                    <Button variant="contained" size="small" onClick={bookNow} value={[value.name, value.fee]} >Book Now</Button>
                                </Box>
                            </Card>
                        </Stack>
                    </Box>

                ))
            }
        </>
    );
}
