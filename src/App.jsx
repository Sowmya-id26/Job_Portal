import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import SaveJobs from "./components/SaveJobs";
import ReadyToApply from "./components/ReadyToApply";
import MyProfile from "./components/MyProfile";
import MyApplication from "./components/MyApplication";
import InterviewPratice from "./components/InterviewPratice";
import AiResumeBuilder from "./components/AiResumeBuilder";
import Settings from './components/Settings'
import Interview from './components/Interview'
import ExploreJobs from './components/ExploreJobs'
import SideBar from "./components/SideBar";

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/sidebar" element={<SideBar/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/savejob" element={<SaveJobs/>}/>
      <Route path="/" element={<ReadyToApply/>}/>
      <Route path="/readytoapply" element={<ReadyToApply/>}/>
      <Route path="/MyProfile" element={<MyProfile/>}/>
      <Route path="/myapplication" element={<MyApplication/>}/>
      <Route path="/interviewpratice" element={<InterviewPratice/>}/>
      <Route path="/interview" element={<Interview/>}/>
      <Route path="/explorejobs" element={<ExploreJobs/>}/>
      <Route path="/airesumebuilder" element={<AiResumeBuilder/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;