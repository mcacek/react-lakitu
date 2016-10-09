import React, { PropTypes } from 'react'

const Door = ({ onClick }) => (
    <li>Door</li>
)

Door.propTypes = {
    onClick: PropTypes.func.isRequred
}

export default Door