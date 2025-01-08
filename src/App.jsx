import './App.css'
import HomeSection from './app/HomeSection'
import {BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        {/* {isLoading && <Loader />}  */}
        <Routes>
          <Route path='/' element={<HomeSection />} />
          {/* <Route path='/services' element={<Services />} /> */}
          {/* <Route path='/about' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/career' element={<NotFound />} /> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
