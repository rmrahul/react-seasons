import React from 'react';

const Spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui big text loader">{props.title}</div>
        </div>
    )
}

Spinner.defaultProps = {
    title : "Loading"
}

export default Spinner;