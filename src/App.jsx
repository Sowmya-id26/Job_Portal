import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;