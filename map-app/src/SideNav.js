import React from 'react'
import CreateList from './CreateList'

class SideNav extends React.Component {
    render() {
        let visibility = (this.props.className === 'sidenav') ? 'ul' : '.ul-active'
        let className = this.props.className
        let linkStyle = {
            listStyle: "none"
        }
        return (
            <nav id="mySidenav" className={className}>
                <ul className={{visibility}} style={linkStyle}>
                    <span><li className="closebtn" onClick={this.props.close}>&times;</li></span>
                    <button className="btn">Filter</button>
                    <CreateList
                        locations={this.props.locations}
                    />
                </ul>
            </nav>
        )
    }
}

export default SideNav
