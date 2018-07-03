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
        let filteredPOIs = this.props.locations.filter(
            (location) => {
                // Do not return if filter does not match location.title
                // -1 represents unable to find a match
                return location.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1;
            }
        );
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
