import React from 'react'

class CreateList extends React.Component {
    render() {
        return(
            <div>
                {this.props.locations.map(location =>
                    <li key={location.title}>
                        {location.title}
                    </li>
                )}
            </div>
        )
    }
}

export default CreateList
