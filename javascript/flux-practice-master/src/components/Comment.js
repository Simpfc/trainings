import React  from 'react'

function Comment(props) {
    const { comment: { text, user } } = props
    return (
        <div>
            {text} <b>{user}</b>
        </div>
    )
}
Comment.propTypes = {
    comment: React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        user: React.PropTypes.string.isRequired
    })
}

export default Comment