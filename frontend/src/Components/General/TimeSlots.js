import React from 'react'

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardActionArea } from "@mui/material";

import Typography from "@mui/material/Typography";


export default function TimeSlots({value, doctId}) {
    const bookSlot = (event) => {
        const timevalue = event.target.value;
        window.location = `${window.location.origin}/appointment/id=${doctId}&time=${timevalue}&`;
    };
    return (
        <>
            {
                // doctors.forEach((element) => {

                (value._id === doctId) &&
                <Card sx={{ maxWidth: 750,p:2, m:0.15 }} id="hiddenCard" >
                    <CardActionArea sx={{ display: "flex" }}>
                        <CardContent>
                            <Stack direction="column" spacing={3} >
                                <Box>
                                    <Stack direction="row" spacing={4}  >
                                        <Typography variant="overline" sx={{ maxWidth:'60px' }}>Morning</Typography>
                                        <Button variant="outlined" size="small" value="10:30AM" onClick={bookSlot}>
                                            10:30AM
                                        </Button>
                                        <Button variant="outlined" size="small" value="11:00AM" onClick={bookSlot}>
                                            11:00AM
                                        </Button>
                                        <Button variant="outlined" size="small" value="11:30AM" onClick={bookSlot}>
                                            11:30AM
                                        </Button>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack direction="row" spacing={4}>
                                        <Typography variant="overline" sx={{ width:'60px' }} >Afternoon</Typography>
                                        <Button variant="outlined" size="small" value="12:00PM" onClick={bookSlot}>
                                            12:00PM
                                        </Button>
                                        <Button variant="outlined" size="small" value="12:30PM" onClick={bookSlot}>
                                            12:30PM
                                        </Button>
                                        <Button variant="outlined" size="small" value="1:00PM" onClick={bookSlot}>
                                            01:00PM
                                        </Button>
                                    </Stack>
                                </Box>
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>

                // })
            }
        </>
    )
}
