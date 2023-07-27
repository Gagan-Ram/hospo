import * as React from 'react';
import Slider from "react-slick";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MultipleItems(props) {
  // console.log(props.specialties);
  // console.log(props.slideToShow);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.slideToShow ,
    slidesToScroll: 1,
    autoplay : props.autoplay
  };

  return (
    <div>
      <Slider {...settings}>
        {
          props.specialties.map((value, index) => (

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {value[0]}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    {value[1]}
                  </Typography> */}
                </CardContent>
              </CardActionArea>
            </Card>

          ))
        }
      </Slider>
    </div>
  )
}