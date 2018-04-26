// Resources consulted: https://reactjs.org/docs/refs-and-the-dom.html

import React, { Component } from 'react';

export default class LocationFilter extends Component {
    ref = React.createRef();

    componentDidUpdate(prevProps, prevState) {
        // IF the sidebar was closed and now it is opened
        if (this.props.focusSelect === true && prevProps.focusSelect === false) {
            this.ref.current.focus();
        }
    }

    passFocusUp = (event) => {
        if (event.key === 'Escape') {
            this.props.passFocusUpToBtn();
        }
    }

    render() {
        return (
            <div className="location-filter">
                <select
                    ref={this.ref}
                    aria-label="dining-categories"
                    value={this.props.selectedCategory}
                    onKeyUp={(event) => this.passFocusUp(event)}
                    onChange={(event) => this.props.onSelectFilter(event.target.value)} >
                    <option value="none-disabled" disabled>What do you fancy?</option>
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