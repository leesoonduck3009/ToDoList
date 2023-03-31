import React from 'react'
import './Nav.scss'
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#toDO">ToDo</a>
                <a href="#about">About</a>
            </div>
        )
    }
}
export default Nav