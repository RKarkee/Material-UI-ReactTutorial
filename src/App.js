import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #142,#236,#253)",
    border: 0,
    borderRadius: 5,
    color: "white",
    padding: "5px 37px",
    margin: 1,
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 24,
      marginBottom: 15,
    },
    subtitle1: {
      fontSize: 25,
    },
  },
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  //   secondary: {
  //     main: blue[500],
  //   },
  // },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "arial-label": "primary checkbox",
          }}
        />
      }
      label="Texting CheckBox"
    />

    // <div>
    //   <Checkbox
    //    checked ={checked}
    //    onChange={(e)=>setChecked(e.target.checked)}
    //    inputProps={{
    //      'arial-label': 'primary checkbox'
    //    }}

    //   />
    // </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg' >
        <div className="App">
          <header className="App-header">
            <AppBar maxwidth='xs' color="primary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Themeing</Typography>
                <Button style={{marginLeft:10, fontSize:20}}>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h3" component="div" color="secondary">
              Welcome to the MUI
            </Typography>
            <Typography variant="subtitle1">Learn more about MUI</Typography>
            <ButtonStyled />
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Paper style={{ height: 75, width: 70, marginTop: 10 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 70, marginTop: 10 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 70, marginTop: 10 }} />
              </Grid>
            </Grid>
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
