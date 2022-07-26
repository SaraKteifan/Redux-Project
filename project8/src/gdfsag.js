
    <div className="app-container">
<div className="app-header">
<div className="app-header-left">
{/* <span className="app-icon" /> */}
<img src={logo} className="safari-logo"/>
<p className="app-name">Safari</p>

</div>
<div className="app-header-right">

<button className="profile-btn">
<i class="fa-solid fa-right-from-bracket"></i>
</button>
</div>

</div>
<div className="app-content">
<div className="projects-section">
<div className="projects-section-header">
  <p>Trips</p>
  <div className="view-actions">
    
    <button className="view-btn grid-view active" title="Grid View">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-grid"
      >
        <rect x={3} y={3} width={7} height={7} />
        <rect x={14} y={3} width={7} height={7} />
        <rect x={14} y={14} width={7} height={7} />
        <rect x={3} y={14} width={7} height={7} />
      </svg>
    </button>
  </div>
</div>

<div className="project-boxes jsGridView">
{users.map(u =>
        <div className="project-box-wrapper">
      <div className="project-box" style={{ backgroundColor: "#fee4cb" }}>
      <div className="project-box-header">
        <span></span>
        <div className="more-wrapper">
          <button className="project-btn-more">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-more-vertical"
            >
              <circle cx={12} cy={12} r={1} />
              <circle cx={12} cy={5} r={1} />
              <circle cx={12} cy={19} r={1} />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-box-content-header">
        <p className="box-content-header">{u.country}</p>
        <p className="box-content-subheader">{u.city}</p>
      </div>
      <div className="box-progress-wrapper">
        <p className="box-progress-header">Progress</p>
        <div className="box-progress-bar">
          <span
            className="box-progress"
            style={{ width: "60%", backgroundColor: "#ff942e" }}
          />
        </div>
        <p className="box-progress-percentage">60%</p>
      </div>
      <div className="project-box-footer">
        <div className="participants">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            alt="participant"
          />
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="participant"
          />
          
        </div>
        <div className="days-left" style={{ color: "#ff942e" }}>
          2 Days Left
        </div>
      </div>
    </div>
  </div>
          )}
  
  
</div>
</div>
</div>
</div>
