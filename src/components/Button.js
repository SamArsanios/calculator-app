import React from 'react'
import PropTypes from 'prop-types'

export default Button = (props) => {
    const { buttonName } = props
    return (
        <div className="btn">
            {buttonName}
        </div>
    );
}

Button.PropTypes = {
    buttonName: PropTypes.string
}

Button.defaultProps = {
    buttonName: ''
}