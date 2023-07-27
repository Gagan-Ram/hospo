import React from 'react';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { useSnackbar } from 'notistack'
// import { Box } from '@mui/material';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Search() {

    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

    const [location, setLocation] = useState("Bangalore");
    const [hospital, setHospital] = useState(null);

    // const style = {
    //     display: 'flex',
    //     flexWrap: 'wrap'
    // }

    const inputLocation = (event, value) => {
        setLocation(value)
        console.log(value);
    }
    const inputHospital = (event, value) => {

        if (location === null) {
            enqueueSnackbar("Please Set the Location first", { variant: "warning" })
        }
        else {
            setHospital(value);
            // console.log(value);
        }
    }
    if (hospital) {
        window.location = `${window.location.origin}/hospitals/hospitals?location=${location}&hospital=${hospital}`
    }

    return (
        <Grid container spacing={2} direction={isSmScreen ? "row" : "column"} sx={{ width: 1000, margin: '25px' }}>
            <Grid item>
                <Autocomplete
                    sx={{ width: 300 }}
                    id="location-search"
                    options={cities}
                    value={location}
                    onChange={inputLocation}
                    renderInput={(params) => <TextField {...params} label="Location" />}
                />
            </Grid>
            <Grid item>
                <Autocomplete
                    sx={{ width: isMdScreen ? 400 : 300 }}
                    id="hospitals-search"
                    autoComplete={true}
                    autoHighlight={true}
                    options={hospitals}
                    value={hospital}
                    onChange={inputHospital}
                    renderInput={(params) => <TextField {...params} label="" placeholder='Search hospitals' />}
                />
            </Grid>
        </Grid>
    );
}

const cities = [
    "Bangalore",
    "Hyderabad"
]

const hospitals = [
    "Apollo Hospitals",
    "AyurVAID Hospitals",
    "Care Hospitals",
    "Sri Hospitals",
]
