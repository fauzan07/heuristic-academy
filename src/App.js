import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
// import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop"
import './App.css';


function App() {
  
  return (
  <>
       <BrowserRouter>
       <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
        {/* <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
        </Switch>
        <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
</>
  );
}

export default App;
