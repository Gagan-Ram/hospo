import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { Box } from "@mui/material";

export default function Filter({ genderSelect, sort, fee, setGenderSelect, setSort, setFee, specialityFilter }) {


    // console.log("genderSelect ------>" + genderSelect)

    const handleChangeGender = (event) => {
        setGenderSelect(event.target.value);
    };

    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    const handleChangeFee = (event) => {
        setFee(event.target.value)
    }

    const OnDelete = () => {
        setGenderSelect('')
        setSort('')
        setFee('')
    }

    return (

            // <Stack direction="row" alignItems="center" spacing={4} >
                <Box >
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    
                    <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={genderSelect}
                        onChange={handleChangeGender}
                        label="gender"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </FormControl>
                {/* </div>

<div> */}
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label1">Sort By</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label1"
                        id="demo-simple-select-standard1"
                        value={sort}
                        onChange={handleChangeSort}
                        label="Sort"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="1">Price - Low to High</MenuItem>
                        <MenuItem value="-1">Price - High to Low</MenuItem>
                        <MenuItem value="years">Years of Experience</MenuItem>
                    </Select>
                </FormControl>
                {/* </div> */}

                {/* <div> */}
                <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                    <InputLabel id="demo-simple-select-standard-label2">Consultaion fee</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label2"
                        id="demo-simple-select-standard2"
                        value={fee}
                        onChange={handleChangeFee}
                        label="Sort"
                    >

                        <MenuItem value="0-0">Free</MenuItem>
                        <MenuItem value="1-300">1-300</MenuItem>
                        <MenuItem value="301-500">301-500</MenuItem>
                        <MenuItem value="501-99999999">501+</MenuItem>
                    </Select>
                </FormControl>
                {/* </div> */}

                {/* <Stack direction="row" alignItems="center" spacing={1}> */}
                <Tooltip title="Delete Filters" placement="right" enterDelay={200}  sx={{position:"relative", top:15}} >
                    <IconButton aria-label="delete" size="large" onClick={OnDelete} color="error" >
                        <DeleteIcon onClick={OnDelete} />
                    </IconButton>
                </Tooltip>
                </Box>
            // </Stack>

);
}

// const doctorsSpecialities = [
    //     "Gynecologist",
    //     "Obstetrician"
    // ]