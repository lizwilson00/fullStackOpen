const Notification = ({ messageText, messageType }) => {
  if (messageText === null) {
    return null
  }

  if (messageType === 'success') {
    return (
      <div className='success'>
        {messageText}
      </div>
    )
  } else if (messageType === 'error') {
    return (
      <div className='error'>
        {messageText}
      </div>
    )
  }
}

export default Notification