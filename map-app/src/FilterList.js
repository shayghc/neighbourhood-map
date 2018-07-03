import React from 'react'

class FilterList extends React.Component {
    render () {
        return (
            <div>
                <label className="intro" htmlFor="POI-filter">Select POIs:</label>
                <form id="POI-filter">
                    {this.props.locations.map(location =>
                        <label key={location.id}>
                            <input type="checkbox" defaultChecked />
                            {location.id}.&nbsp;&nbsp;{location.title}
                        </label>
                    )}
                </form>
            </div>
        )
    }
}

export default FilterList
