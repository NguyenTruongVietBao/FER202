import { Route, Routes } from "react-router-dom";
import "./App.css";
import Films from "./components/Content/Films";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Detail from "./components/Content/Detail";
import Contact from "./components/Content/Contact";
import News from "./components/Content/News";
import About from "./components/Content/About";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeMode/ThemeContext";
import { Box, Button, Typography } from "@mui/material";
import Login from "./components/Content/Login";

function App() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
      
      <div className="App-header">
        <Box sx={{ bgcolor: '#ee6e73'}} textAlign={'center'}>
          <Button onClick={toggle}>      
            <a style={{color: 'white'}}><i class="material-icons left">brightness_3</i>{!dark ? "Dark" : "Light"} mode</a>
          </Button>
        </Box>
        <Navigation /> 
      </div>

      <div className="App-body">
        <Routes>
          <Route path="/" element={<Films />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>

      <div className="App-footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
