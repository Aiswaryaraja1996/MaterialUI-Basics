import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";

import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { purple } from "@mui/material/colors";
import { red } from "@mui/material/colors";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "2rem",
}));

const CustomCheckbox1 = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));

const CustomCheckbox2 = styled(Checkbox)(({ theme }) => ({
  color: theme.status.primary,
  "&.Mui-checked": {
    color: theme.status.primary,
  },
}));

const CustomCheckbox3 = styled(Checkbox)(({ theme }) => ({
  color: theme.status.secondary,
  "&.Mui-checked": {
    color: theme.status.secondary,
  },
}));

const theme = createTheme({
  status: {
    danger: orange[500],
    primary: purple[500],
    secondary: red[500],
  },
});





export default function BasicGrid() {
  const [checked, setChecked] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [name, setName] = React.useState("");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const [age, setAge] = React.useState("");

  const handleSelect = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(null);
  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "10rem" }}>
        <h2>Responsive Grid</h2>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <Item>{value}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <h2>Buttons</h2>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </Box>

      <Box>
        <h2>Checkbox</h2>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>TextField</h2>

        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Name</InputLabel>
          <Input
            id="component-helper"
            value={name}
            onChange={handleInput}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>

        <FormControl error variant="standard">
          <InputLabel htmlFor="component-error">Name</InputLabel>
          <Input
            id="component-error"
            value={name}
            onChange={handleInput}
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-error-text">Error</FormHelperText>
        </FormControl>
      </Box>
      <Box>
        <h2>Select</h2>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleSelect}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <h2>TextField - Date</h2>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </LocalizationProvider>
      </Box>

      <Box>
        <h2>ThemeProvider</h2>
        <ThemeProvider theme={theme}>
          <CustomCheckbox1 defaultChecked />
          <CustomCheckbox2 defaultChecked />
          <CustomCheckbox3 defaultChecked />
        </ThemeProvider>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Button color="inherit" aria-describedby={id} onClick={handleClick}>
              Login
            </Button>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
