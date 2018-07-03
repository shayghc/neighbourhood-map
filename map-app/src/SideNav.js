import React from 'react'
import CreateList from './CreateList'
import FilterList from './FilterList.js'

class SideNav extends React.Component {
    state = {
        isFiltered: true
    }

    toggleFilter = () => {
        this.state.isFiltered ? this.setState({isFiltered: false}) : this.setState({isFiltered: true})
    }

    render() {
        const isFiltered = this.state.isFiltered;
        let visibility = (this.props.className === 'sidenav') ? 'ul' : '.ul-active'
        let className = this.props.className
        let linkStyle = {
            listStyle: "none"
        }
        return (
            <nav id="mySidenav" className={className}>
                <ul className={{visibility}} style={linkStyle}>
                    <span><li className="closebtn" onClick={this.props.close}>&times;</li></span>
                    <button className="btn" onClick={this.toggleFilter}>Filter View</button>
                    {isFiltered ? (
                        <CreateList locations={this.props.locations} />
                    ) : (
                        <FilterList locations={this.props.locations} />
                    )}

                </ul>
            </nav>
        )
    }
}

export default SideNav
