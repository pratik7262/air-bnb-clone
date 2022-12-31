import { createTheme } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: 15,
    
    },
  },
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 1,
        },
        variant: "subtitle2",
        textTransform: "capitalize",
      },
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1,
        },
        flexDirection:'row'
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: (teme) => theme.palette.primary.main,
        },
        underline: "none",
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        p: 0,
        disableRipple: true,
      },
      variant: "text",
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper:{
        defaultProps:{
            elevation:0
        }
    }
  },
});


