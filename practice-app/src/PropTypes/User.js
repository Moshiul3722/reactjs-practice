import React from 'react'
import PropTypes from 'prop-types'
// console.log(PropTypes);
const User = (props) => {
    console.log(props.user);
  return (
    <div>
        <h1>{props.userName}</h1>
        <h1>{props.userId}</h1>
    </div>
  )
};

User.propTypes={
    userName:PropTypes.string,
    userId:PropTypes.number
};

User.defaultProps = {
    userName:"default name",
    userId:0
}

// set props on object
User.propTypes={
    // user:PropTypes.object.isRequired
    user:PropTypes.shape({
        id:PropTypes.number,
        name: PropTypes.string
    })
}

export default User

// rafcp