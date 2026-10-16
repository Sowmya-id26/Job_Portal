
import { IoSearchOutline } from "react-icons/io5";
import SideBar from "../SideBar";
import "./index.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <SideBar />

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1 className="dashboard-title">
            Welcome to HirePath!
          </h1>

          <p className="dashboard-description">
            Discover startup jobs and find your next opportunity.
          </p>
        </header>

        <div className="dashboard-search">
          <IoSearchOutline className="search-icon" />
          <input
            className="dashboard-search-input"
            type="search"
            placeholder="Search jobs, skills or startups..."
          />
        </div>

        <section className="dashboard-stats">
          <div className="stat-card jobs-card">
            <h4>24</h4>
            <p>Available Jobs</p>
          </div>

          <div className="stat-card saved-card">
            <h4>3</h4>
            <p>Saved Jobs</p>
          </div>

          <div className="stat-card applications-card">
            <h4>8</h4>
            <p>Applications</p>
          </div>

          <div className="stat-card interviews-card">
            <h4>2</h4>
            <p>Interviews</p>
          </div>
        </section>

        <section className="recommended-section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Recommended for you</h2>
              <p className="section-description">
                Explore opportunities at growing startups.
              </p>
            </div>
          </div>

          <div className="recommended-job-card">
            <div className="job-card-top">
              <div className="company-logo">
                <span>FS</span>
              </div>

              <div className="job-details">
                <h3 className="job-title">
                  Frontend Developer Intern
                </h3>
                <p className="company-name">Example Startup</p>
              </div>

              <span className="job-type">Internship</span>
            </div>

            <div className="job-skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS</span>
            </div>

            <div className="job-card-footer">
              <p className="job-location">Remote · Fresher friendly</p>
              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
