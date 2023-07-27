import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
// import Zoom from '@mui/material/Zoom';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import UpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { useState } from 'react';
import DoctorsCard from './DoctorsCard';
import TimeSlots from './TimeSlots';
// import Filter from './Filter';
import { Stack } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

// const fabStyle = {
//   position: 'absolute',
//   bottom: 16,
//   right: 16,
// };

// const fabGreenStyle = {
//   color: 'common.white',
//   bgcolor: green[500],
//   '&:hover': {
//     bgcolor: green[600],
//   },
// };

export default function FloatingActionButtonZoom(props) {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [doctId, setDoctId] = useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // const transitionDuration = {
  //   enter: theme.transitions.duration.enteringScreen,
  //   exit: theme.transitions.duration.leavingScreen,
  // };

  // const fabs = [
  //   {
  //     color: 'primary',
  //     sx: fabStyle,
  //     icon: <AddIcon />,
  //     label: 'Add',
  //   },
  //   {
  //     color: 'secondary',
  //     sx: fabStyle,
  //     icon: <EditIcon />,
  //     label: 'Edit',
  //   },
  //   {
  //     color: 'inherit',
  //     sx: { ...fabStyle, ...fabGreenStyle },
  //     icon: <UpIcon />,
  //     label: 'Expand',
  //   },
  // ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        maxWidth: 750,
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label={`Doctors (${props.doctors.length})`}  {...a11yProps(1)} />
          <Tab label="Services" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box>
            <Typography variant="h6" display="block" gutterBottom>
              About{" "}{props.value.name}
            </Typography>
            <br />
            <Typography variant="body2" display="block" gutterBottom>
              {props.value.description}
            </Typography>
            <br />

            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap",  }} >
              <Box sx={{ minWidth: "40%", maxWidth: "45%" }}>
                <Typography variant="body1" display="block" gutterBottom sx={{fontStyle:"italic"  }} >
                  Address
                </Typography>
                <Typography variant="overline" display="block" gutterBottom sx={{ textTransform: "none" , lineHeight:'1.6' }} >
                  {props.value.location[1]} <br />
                  {props.value.address}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" display="block" gutterBottom  sx={{fontStyle:"italic"  }} >
                  Timings
                </Typography>
                <Typography variant="overline" display="block" gutterBottom sx={{ textTransform: "none" , lineHeight:'1.6' }} >
                  {props.value.timing[0]}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" display="block" gutterBottom sx={{fontStyle:"italic"  }} >
                  Mode of Payments
                </Typography>
                <Typography variant="overline" display="block" gutterBottom sx={{ textTransform: "none" , lineHeight:'1.6' }} >
                  Credit Card | Cash | Online Payment | UPI
                </Typography>


              </Box>
            </Box>

          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

          {
            props.doctors.map((doctorvalue, index) => (
              <Stack sx={{ margin: "25px" }}>
                <DoctorsCard value={doctorvalue} setDoctId={setDoctId} />
                <TimeSlots value={doctorvalue} doctId={doctId} />
              </Stack>
            ))
          }
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Box>
            <Typography variant="body2" color="text.secondary" display="block" gutterBottom>

              <ul>
                {
                  props.value.services.map((data, index) => (
                    <li>
                      {data}
                    </li>

                  ))
                }
              </ul>
            </Typography>

          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
