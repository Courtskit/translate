import { Form, Button } from 'react-bootstrap'

export const Translate = () => {
  
  return (
    <div className="formStyles">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control name='input' placeholder="Enter phrase here" as="textarea" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check inline type="checkbox" label="French" />
          <Form.Check inline type="checkbox" label="Spanish" />
          <Form.Check inline type="checkbox" label="Chinese" />
        </Form.Group>
        <Button variant="primary" type="submit"> Translate </Button>
      </Form>
    </div>
  );
};

export default Translate;