import React from 'react'

export const PrevArrow = (props) => {

    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                backgroundColor: "white", 
                borderRadius: "50%", display: 'flex', 
                alignItems: "center", justifyContent: "center", 
                padding: "4px"
            }}
            onClick={onClick}
        >

        </div>
    )
}
