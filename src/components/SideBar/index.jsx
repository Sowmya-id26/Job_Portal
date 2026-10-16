
import { Link } from "react-router-dom"
import './index.css'
function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2 className="sidebar-title">HirePath</h2>
        <p className="sidebar-tagline">Your journey to your first job</p>
      </div>

      <nav className="sidebar-nav">
        <Link className="sidebar-link" to="/">Dashboard</Link>
        <Link className="sidebar-link" to="/explorejobs">Explore Jobs</Link>
        <Link className="sidebar-link" to="/savejob">Save Jobs</Link>
        <Link className="sidebar-link" to="/readytoapply">Ready to Apply</Link>
        <Link className="sidebar-link" to="/myapplication">My Application</Link>
        <Link className="sidebar-link" to="/interview">Interview</Link>
        <Link className="sidebar-link" to="/airesumebuilder">AI Resume Builder</Link>
        <Link className="sidebar-link" to="/interviewpratice">Interview Practice</Link>
        <Link className="sidebar-link" to="/myprofile">My Profile</Link>
        <Link className="sidebar-link" to="/settings">Settings</Link>
      </nav>
    </aside>
  )
}

export default SideBar
