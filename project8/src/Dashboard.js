import logo from './safari_logo.svg'
import './Dashboard.css'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers, logout, deleting} from './action/index'
import {useDispatch} from 'react-redux'

class Users extends Component {
    constructor(props){
        super(props);
        this.state=
        {deleteButton:true};
        this.handleButton=this.handleButton.bind(this)
    }
    
    componentDidMount(){
        this.props.getUsers()
        
    }
    
    handleButton(id){
        // event.preventDefault();
        
        document.getElementById(id).style.display="none";   
    }
    render() {
        const {users} = this.props.users
        console.log(this.props.users)

        
        return (

            <div className="app-container">
            <div className="app-header">
            <div className="app-header-left">
            {/* <span className="app-icon" /> */}
            <img src={logo} className="safari-logo"/>
            <p className="app-name">Safari</p>
            
            </div>
            <div className="app-header-right">
            
            <button className="profile-btn"  onClick={()=> this.props.logout()}>
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
                    <div className="project-box-wrapper"  id={u.city}>
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
                  
                  <div className="project-box-footer">
                    <div className="participants">
                      
                      
                    </div>
                    <div className="days-left" id='deleteBtn' style={{ color: "#ff942e" }} onClick={()=>this.handleButton(u.city)}>
                      Delete
                    </div>
                  </div>
                </div>
              </div>
                      )}
              
              
            </div>
            </div>
            </div>
            </div>
           
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers, logout, deleting})(Users)