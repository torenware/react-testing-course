import Alert from 'react-bootstrap/Alert';
const ErrorAlert = ({ message }) => {
  return <Alert variant='danger'>
    <Alert.Heading>An unexpected error occurred on the server</Alert.Heading>
    <p>Yikes!</p>
  </Alert>
}

export default ErrorAlert;