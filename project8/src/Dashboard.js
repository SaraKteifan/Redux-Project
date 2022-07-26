import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from './action/index'

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

            <>
  <div className="netflixLogo">
    <a id="logo" href="#home">
      <img
        src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
        alt="Logo Image" 
      />
    </a>
    
  </div>


  {/* END OF HEADER */}
  {/* MAIN CONTAINER */}
  <section className="main-container">
    <div className="location" id="home">
      <h1 id="home" className='mb-5'>All Movies</h1>
      <div className="box">
         {users.map(u => 
                      <div key={u.id} style={{display:this.state.deleteButton?'block':'none'}} id={u.id} className='mb-5'>
                         <a href="">
          <img
            src={"https://image.tmdb.org/t/p/w500"+u.poster_path}
            alt=""
           
          />
        </a> <br></br>
                         <h6 style={{height:'50px'}} className='mt-5 mb-0'>{u.original_title}</h6> 
                         <button onClick={() => this.handleButton(u.id)} className="btn btn-danger">Delete</button> 
                     </div>
               )}
        {/* <div>
        <a href="">
          <img
            src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true"
            alt=""
          />
        </a>
        <p>name </p>
        <p>"overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures."</p>
        </div> */}
        
      </div>
    </div>
   </section>
</>

 // <div>
            //     {users.map(u => 
            //          <div key={u.id} style={{display:this.state.deleteButton?'block':'none'}} id={u.id}>
            //              <h6 >{u.original_title}</h6> 
            //              <button onClick={() => this.handleButton(u.id)} className="btn btn-danger">Delete</button> 
            //          </div>
            //     )}
            // </div>
           
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Users)