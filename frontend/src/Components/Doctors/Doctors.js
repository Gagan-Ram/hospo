import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DoctorsCard from "../General/DoctorsCard";
import ResponsiveAppBar from "../General/ResponsiveAppBar";
import Filter from "../General/Filter";
import TimeSlots from "../General/TimeSlots";
import { config } from "../../App";
import { Box } from "@mui/material";
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import { useSnackbar } from 'notistack'


export default function Doctors() {

  const { enqueueSnackbar } = useSnackbar();

  const [doctors, setDoctors] = useState([]);
  const [doctId, setDoctId] = useState(null)

  /**
   * 
   * whenever reUsing <DoctorsCard> make sure to declare  const [doctId, setDoctId] = useState(null) in the component first
   * 
  */

  const [genderSelect, setGenderSelect] = useState('');
  const [sort, setSort] = useState('');
  const [fee, setFee] = useState('');
  // console.log(`0000000000000000000000000000---------->${genderSelect}`)


  // const handleChangeGender = (event) => {
  //   setGenderSelect(event.target.value);
  // };

  // const handleChangeSort = (event) => {
  //   setSort(event.target.value);
  // };

  // const handleChangeFee = (event) => {
  //   setFee(event.target.value)
  // }

  // const OnDelete = () => {
  //   setGenderSelect('')
  //   setSort('')
  //   setFee('')
  // }

  const [timerID, setTimerId] = useState('')

  const url = window.location.pathname;
  let specialtization = url.split("=");

  function fetchDoctors() {
    let api = `${config.endpoint}doctors?doctorstype=${specialtization[1]}`;

    if (sort || genderSelect || fee) {
      // console.log("Rerendering-------------------------")
      api += `&genderSelect=${genderSelect}&sort=${sort}&fee=${fee}`
      // console.log(api);

    }

    axios.get(api)
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        enqueueSnackbar("Please check your internet connection", { variant: "error" })
      })
  }


  useEffect(() => {

    timerID && clearTimeout(timerID)

    const newTimerID = setTimeout(() => {
      fetchDoctors()
    }, 2000);

    setTimerId(newTimerID)

    return function () {
      clearTimeout(timerID)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, genderSelect, fee]);


  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>

      <Box sx={{ p: 7.5, height: "100%" }}>
        <Typography variant="overline" gutterBottom >
          Photos are not added for security purpose
        </Typography>
        <Typography variant="h5" gutterBottom>
          <span style={{ color: 'red' }}>{doctors.length}</span>  doctors available
        </Typography>
        <Typography variant="body1" gutterBottom>
          Book appointments with minimum wait-time & verified doctor details
        </Typography>

        <Box style={{ margin: "15px 0px 15px 0px " }} >
          <Filter genderSelect={genderSelect} sort={sort} fee={fee} setGenderSelect={setGenderSelect} setSort={setSort} setFee={setFee} />
        </Box>

        <Stack spacing={5}  >
          {doctors.map((value, index) => (
            <Box key={value._id}>
              {/* {console.log("........................................."+value._id)} */}
              <DoctorsCard value={value} doctId={doctId} setDoctId={setDoctId} />

              <TimeSlots value={value} doctId={doctId} />
            </Box>
          ))}
        </Stack>

        {
          (doctors.length === 0) && (
            <Box sx={{ height: '100vh', display: "flex", justifyContent: "center" }} >
              <Box>
                <SentimentDissatisfiedRoundedIcon fontSize='large' color="disabled" sx={{ position: "relative", left: "30%" }} ></SentimentDissatisfiedRoundedIcon>
                <br />
                <Typography variant="overline" color="disabled" gutterBottom sx={{}} >
                  Oops! No Doctors found
                </Typography>
              </Box>
            </Box>
          )
        }

      </Box>
    </ >
  );
}