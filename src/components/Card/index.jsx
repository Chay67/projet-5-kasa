import React from 'react'

const Card = (props) => {
    const { id, title, cover } = props;

    return (
        <div>
            <img src={cover} alt={title} />
            <div>{id} - {title}</div>
        </div>
    )
}

export default Card