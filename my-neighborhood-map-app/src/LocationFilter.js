import React, { Component } from 'react';

export default class LocationFilter extends Component {

    render() {
        return (
            <div className="location-filter">
                {/* <input type="text" placeholder="Filter locations by..."
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)} /> */}
                <select
                    value={this.props.selectedCategory}
                    onChange={(event) => this.props.onSelectFilter(event.target.value)} >
                    <option value="none-disabled" disabled>What does your palate desire? ...</option>
                    {
                        this.props.categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                    <option value="All">All of it!</option>
                </select>
            </div>
        );
    }
}