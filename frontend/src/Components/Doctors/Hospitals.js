import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

import axios from "axios";
import { config } from "../../App";
import { useState } from "react";
import FloatingActionButtonZoom from "../General/FloatingActionButtonZoom.";
import ResponsiveAppBar from "../General/ResponsiveAppBar";
import Search from "../General/Search";

import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';

import hospitalImage from '../../assets/images/hospitalImage.jpg'

import { useSnackbar } from 'notistack'

export default function Hospitals() {
  const { enqueueSnackbar } = useSnackbar();
  const [hospitalFetch, setHospital] = useState([]);
  const [hospitalId, setHospitalId] = useState([]);
  // const [doctorFetch, setDoctor] = useState([]);

  let doctors = [];

  const [genderSelect, setGenderSelect] = useState('')
  const [sort, setSort] = useState('')
  const [fee, setFee] = useState('')

  useEffect(() => {
    const url = window.location.search;

    const queryValues = url.split("&");
    const location = queryValues[0].split("=")[1];
    const hospital = queryValues[1].split("=")[1].replace(/%20/g, " ");
    console.log(location + " ---" + hospital);
    let api = `${config.endpoint}hospitals?location=${location}&hospital=${hospital}`;

    // if (doctorsSpeciality) {
    //   api = `${config.endpoint}doctors?doctorstype=${doctorsSpeciality}&hospital=${hospital}`
    //   doctors =
    //     axios.get(api).then((res) => {
    //       setDoc( res.data )
    //     });
    //     doctors = doc
    //     console.log("=1=1==1=1==1=1=1==1=1=1=1=" + doctors)
    // } else {
    axios.get(api)
      .then((res) => {
        setHospital(res.data);
        setHospitalId(res.data[0].doctors);
      })
      .catch((err) => {
        enqueueSnackbar("Please check your internet connection", { variant: "error" })
      })
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, genderSelect, fee]);

  hospitalId.forEach(async (value, index) => {
    const doctapi = `${config.endpoint}doctors/${value}`;
    // console.log(doctapi);

    await axios.get(doctapi)
      .then((res) => {
        doctors.push(res.data[0]);
      })
      .catch((err) => {
        enqueueSnackbar("Please check your internet connection "+err, { variant: "error" })
      })
  });

  return (
    // <div style={{ margin: "20px", background: "#dbdbe5" }} >

    <>
      <header>
        <ResponsiveAppBar />
        <Search />
      </header>

      {/* pass to ActionCard and try */}
      <main style={{ display: "flex", justifyContent: "center" }}>
        <Box>
          {hospitalFetch.map((value, key) => (
            <>
              <Card sx={{ maxWidth: 750, margin: "25px", padding: "1%" }}>
                <CardActionArea sx={{ display: "flex" }}>
                  <CardMedia
                    sx={{ width: "75%" }}
                    component="img"
                    height="140"
                    image={hospitalImage}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {value.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.location[0]},{value.location[1]} <br />
                      {value.address}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Box style={{ margin: "25px", padding: "1%" }}>
                <FloatingActionButtonZoom value={value} doctors={doctors}
                  genderSelect={genderSelect} sort={sort} fee={fee} setGenderSelect={setGenderSelect} setSort={setSort} setFee={setFee}
                />
              </Box>

            </>
          ))}
        </Box>

        {
          (hospitalFetch.length === 0) && (
            <Box sx={{ height: '100vh', display: "flex", alignItems: "center" }} >
              <Box>
                <SentimentDissatisfiedRoundedIcon fontSize='large' color="disabled" sx={{ position: "relative", left: "30%" }} ></SentimentDissatisfiedRoundedIcon>
                <br />
                <Typography variant="overline" color="disabled" gutterBottom sx={{}} >
                  Oops! No Hospitals found
                </Typography>
              </Box>
            </Box>
          )
        }

      </main>
    </>
  );
}
