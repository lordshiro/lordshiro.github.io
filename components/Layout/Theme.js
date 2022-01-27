
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: ['Sarabun',"Noto Sans",  "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#000000",
      light: "#ffffff",
    },
    secondary: {
      main: "#1f86fd",
      // light: "#1f86fd",
    },
    action: {
      main: "#131313",
      light: "#1f86fd",
      dark: "#3e9b4c",
    },
    text: {
      secondary: "#ffffff",
      primary: "#000",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    tagA: {
      textDecoration: "none",
    },
  },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              border: `1px solid #000000`,
              fontFamily: 'Sarabun',
            },
          },
        
        ],
        variants: [
        
          {
            props: { variant: 'text' },
            style: {
              textTransform: 'none',
              border: '0',
              color: "#1f86fd",
              fontWeight:'600',
              cursor:'pointer', 
              textDecoration:'underline',
              fontFamily: 'Sarabun',
            },
          },
        ],
      },
    }
  })
  
 

export default theme;
