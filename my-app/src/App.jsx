// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { toggleMode } from './themeSlice';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { themeSettings } from './theme';
// import { themeSettings, tokens } from './theme';
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard';
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";


function App() {
  const mode = useSelector((state) => state.theme.mode);
  // const dispatch = useDispatch();
  const theme = createTheme(themeSettings(mode));

  // const handleToggle = () => {
  //   dispatch(toggleMode());
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <main className='content'>
          <Topbar />
          <h1>yousef</h1>
        </main>
      </div>
      {/* <div>
        <button onClick={handleToggle}>
          Toggle Mode
        </button>
        <p>Current mode: {mode}</p>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
