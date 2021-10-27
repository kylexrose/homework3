import React from 'react'

function Stars(props) {
    let count = props.count;
    let stars = [];
    for(let i = 0; i < count; i++){
        stars.push(<img src = {'#'}/>)
        }
    return (
        <div>
            {stars}
        </div>
    )
}

export default Stars
