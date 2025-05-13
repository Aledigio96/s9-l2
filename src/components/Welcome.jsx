import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="my-4 text-center">
      <Alert variant="dark" className="bg-dark text-light">
        <h1>Benvenuto nella React Library!</h1>
        <p>Qui trovi i migliori libri fantasy da tutto il mondo.</p>
      </Alert>
    </div>
  );
};

export default Welcome;
