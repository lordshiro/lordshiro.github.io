import {  useState } from 'react';
import { styled } from '@mui/material/styles';
import { useRouter } from "next/router";
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItems from './ListItems';
import { makeStyles } from '@mui/styles';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  // MuiToolbar: {
  //   background: '#1f86fd',
  // },
  MuiIconTog: {
    color: 'rgb(222 205 3 / 54%) !important',
    background: 'rgb(39 39 39 / 54%) !important',
    padding: '5px !important',
    marginLeft: '15px !important',
  },
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    backgroundColor: "#ffffff",
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
export default function Appbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
<>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
   
            <div style={{ width: '50%' }}>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} sx={{textTransform:"uppercase"}}>
               TEST
              </Typography>
            </div>
         
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              paddingTop: '20px',
              paddingBottom: '20px',
              display: 'block',
              px: [1],
            }}
          >
              <div className="boxLogo">
                <div className="CBLOGO">TEST</div>
                </div>
          </Toolbar>
          <Divider />
          <ListItems />
          <Divider />
        </Drawer>
        <Box
          component="main"

        >
          <Toolbar />

        </Box>
      </Box>

    </>
  );
}

