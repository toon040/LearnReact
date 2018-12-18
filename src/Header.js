import React, { Component } from 'react';

class Header extends Component {   
    handleHeaderClicked() {
        alert("Header click")
        //alert(this.props.currentUser) // error  ต้องสร้าง function ตอนเรียกใช้แบบ comment ข้างล่าง
    }
    
    render() {
        
        let {currentUser,isLoggedIn} = this.props
        currentUser = "Logined in as " + currentUser

        return (
            <div onClick={this.handleHeaderClicked}>Header {isLoggedIn && currentUser}</div>
            //<div onClick={()=>{alert(currentUser)}}>Header {isLoggedIn && currentUser}</div>
        )
    }
}

export default Header

