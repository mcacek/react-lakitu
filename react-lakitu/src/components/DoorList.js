import React, { PropTypes } from 'react'
import Door from './Door'

const DoorList = ({ doors, onDoorClick }) => (
    <div>
        <h1>Doors</h1>
        <ul>
            {doors.map((door) =>
                <Door options={door} onClick={() => onDoorClick(door.id)} />
            )}
        </ul>
    </div>
)

DoorList.prototype = {
    doors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    onDoorClick: PropTypes.func.isRequred
}

export default DoorList