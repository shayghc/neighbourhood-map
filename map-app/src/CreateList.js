import React from 'react'
import Location from './Location'

class CreateList extends React.Component {
    state = {
        filter: ''
    }

    updateFilter(event) {
        // Limit text input to 25 characters
        this.setState({filter: event.target.value.substr(0, 25)})
    }

    render() {
        let filteredPOIs = this.props.locations;
        return(
            <div>
                <input
                    type="text"
                    value={this.state.filter}
                    placeholder="Enter text to filter the POIs"
                    onChange={this.updateFilter.bind(this)}
                />
                {filteredPOIs.map((location) => {
                    return <Location location={location} key={location.id}/>
                })}
            </div>
        )
    }
}

export default CreateList
