import React from 'react'

class FilterList extends React.Component {
    render () {
        return (
            <div>
                <label class="intro" for="pet-select">Choose POIs:</label>
                <form>
                    {this.props.locations.map(location =>
                        <label key={location.id}>
                            <input type="checkbox" value="" checked/>
                            {location.id}. &nbsp;{location.title}
                        </label>
                    )}
                    <button>Filter</button>
                </form>
            </div>
        )
    }
}

export default FilterList
