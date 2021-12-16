import React from 'react'

const Square = ({player, handlePlayerTurn}) => {
    return (
        <div className="square" onClick={handlePlayerTurn}>
            <div className="box">{player}</div>
        </div>
    )
}

export default Square
