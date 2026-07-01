import { Button, Card, Container, Form } from "react-bootstrap";

const BootstrapForm = () => {
  return (
    <Container className="d-flex justify-content-center my-5">
      <Card className="shadow p-4" style={{ width: "400px" }}>
        <Card.Title className="text-center mb-4">
          React Bootstrap Form
        </Card.Title>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>

          <Form.Check
            type="checkbox"
            label="Remember Me"
            className="mb-3"
          />

          <Button variant="primary" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default BootstrapForm;