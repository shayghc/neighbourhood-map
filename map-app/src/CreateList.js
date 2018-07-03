import React from 'react'
import Location from './Location'

class CreateList extends React.Component {
    state = {
        search: ''
    }

    render() {
        let filteredPOIs = this.props.locations;
        return(
            <div>
                <input
                    type="text"
                    value={this.state.search}
                    placeholder="Enter text to filter the POIs"
                />
                {filteredPOIs.map((location) => {
                    return <Location location={location} key={location.id}/>
                })}
            </div>
        )
    }
}

export default CreateList
