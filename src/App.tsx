import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Button4 from "@material-ui/core/Button";
import Paper4 from "@material-ui/core/Paper";

import Slider4 from "@material-ui/core/Slider";
import Checkbox4 from "@material-ui/core/Checkbox";
import TextField4 from "@material-ui/core/TextField";
import Button5 from "@mui/material/Button";
import Paper5 from "@mui/material/Paper";

import Slider5 from "@mui/material/Slider";
import Checkbox5 from "@mui/material/Checkbox";
import TextField5 from "@mui/material/TextField";
import CssBaseline4 from "@material-ui/core/CssBaseline";
import CssBaselin5 from "@mui/material/CssBaseline";
import Stack5 from "@mui/material/Stack";

import { ThemeProvider as ThemeProvider5 } from "@emotion/react";
import { createTheme as createTheme5 } from "@mui/material/styles";
import { red, green as green5, orange } from "@mui/material/colors";

import {
  createTheme as createTheme4,
  ThemeProvider as ThemeProvider4,
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme4 = createTheme4({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const theme5 = createTheme5({
  palette: {
    primary: {
      main: orange["400"],
    },
    secondary: {
      main: green5["400"],
    },
    error: {
      main: red.A400,
    },
  },
});

function App() {
  // There is conflict with react type
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider4 theme={theme4}>
        <ThemeProvider5 theme={theme5}>
          <CssBaseline4 />
          <CssBaselin5 />
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <Stack5 spacing={4} alignItems={"center"}>
            <Paper4
              elevation={5}
              style={{
                padding: 16,
                width: "100%",
              }}
            >
              <Stack5 spacing={2} alignItems={"center"}>
                <Button4
                  fullWidth
                  variant={"contained"}
                  color={"primary"}
                  onClick={() => setCount((count) => count + 1)}
                >
                  count is {count}
                </Button4>
                <TextField4
                  variant={"outlined"}
                  color={"primary"}
                  size={"small"}
                  fullWidth
                  defaultValue={"MUI 4"}
                />
                <Slider4 value={22} />

                <Checkbox4 color={"primary"} defaultChecked />
              </Stack5>
            </Paper4>

            <Paper5
              elevation={5}
              sx={{
                padding: 2,
                width: "100%",
              }}
            >
              <Stack5 spacing={2}>
                <Button5
                  fullWidth
                  variant={"contained"}
                  color={"primary"}
                  onClick={() => setCount((count) => count + 1)}
                >
                  count is {count}
                </Button5>
                <TextField5
                  variant={"outlined"}
                  color={"primary"}
                  size={"small"}
                  fullWidth
                  defaultValue={"MUI 5"}
                />
                <Slider5 value={22} />

                <Checkbox5 defaultChecked />
              </Stack5>
            </Paper5>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </Stack5>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </ThemeProvider5>
      </ThemeProvider4>
    </>
  );
}

export default App;
