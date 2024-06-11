import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'; // Add this line to import useState
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import { themeSettings, tokens } from './theme';
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/TheSideBar'
import Dashboard from './scenes/dashboard/index';
// import { CssBaseline, ThemeProvider } from "@mui/material";

import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";
// import { ColorModeContext, useMode } from "./theme";


function App() {
  const mode = useSelector((state) => state.theme.mode);

  // const dispatch = useDispatch();

  const theme = createTheme(themeSettings(mode));
  const [isSidebar, setIsSidebar] = useState(true);


  // const handleToggle = () => {
  //   dispatch(toggleMode());
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
        <Sidebar isSidebar={isSidebar} />
        <main className='content'>
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <h1 style={{ height: '100px' }}>yousef</h1>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
