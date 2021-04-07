import './Style.css';
import React from 'react'
import { connect } from 'react-redux'
import {set_data , facebookLogin } from '../../src/store/action/Action'




class Home extends React.Component {

  render() {
    console.log("Props--->", this.props)
    return (
      <div className="home ">
        <h1>This Is My Home Page</h1>
        <button className="butt" onClick={() => this.props.set_data()} >Set_data</button> <br/>
        <button className="butt" onClick={() => this.props.facebookLogin()}>Facebook Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
set_data : () => dispatch (set_data()),
facebookLogin : () => dispatch (facebookLogin())
})



export default connect(mapStateToProps, mapDispatchToProps)(Home);