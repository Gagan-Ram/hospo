import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import { config } from '../../App';

export default function ActionAreaCard(props) {
  // console.log(props)
  // console.log(props.value[0])
  const BorderCardStyle = {
    margin: '5px 5px',
    borderRadius: '30px',
    height: '250px',
    width: '210px'
  }
  const CardStyle = {
    margin: '5px 5px',
    borderRadius: '10px',
    height: '270px',
    width: '225px'
  }
  const initialUrl = `${config.endpoint}doctors`

  const [url, urlChanged] = useState(initialUrl)
  console.log(url);
  const cardClicked = (event) => {

    /*
      Why props.value[0]  ? bcz the card gets value[0] as props so No need for us to explicitly define as attribute in Card and access through e.target.value 
    */
    // console.log(url);
    const value = props.value[1]
    // console.log(value);

    urlChanged(`${initialUrl}?doctors=${value}`)
    // console.log(url);

    window.location = `${window.location}doctors=${value} `

  }

  return (
    <Card sx={{ maxWidth: 345 }} style={props.border ? BorderCardStyle : CardStyle} onClick={cardClicked} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.value[0]}
          alt="image"
          sx={{ objectFit: "contain" }}
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="div">
            {props.value[1]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.value[2]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
