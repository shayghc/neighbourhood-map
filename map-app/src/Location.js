import React from 'react'

class Location extends React.Component {
    render() {
        const { location, key } = this.props;
        return(
            <li key={key}>
                {location.id}.&nbsp;&nbsp;{location.title}
            </li>
        )
    }
}

export default Location
