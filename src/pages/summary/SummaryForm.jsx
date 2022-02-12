import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { OverlayTrigger, Popover } from 'react-bootstrap';


const SummaryForm = () => {
  const [cbIsChecked, setCbIsChecked] = useState(false);

  const toggleBtnEnabled = () => {
    setCbIsChecked(!cbIsChecked);
    console.log("after", cbIsChecked.valueOf())
  };

  const popover = (
    <Popover id="termsandconditions-popover">
      No ice cream will actually be delivered
    </Popover>
  );


  const checkboxLabel = (
    <span>
      &nbsp;I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );


  return <Form>
    <p>Summary Form</p>
    <Form.Group
      controlId='orderButtonID'
      className="pb-2"
    >
      <Button disabled={!cbIsChecked}>Order Sundae</Button>
    </Form.Group>
    <Form.Group
      controlId='terms-and-conditions'
    >
      <Form.Check
        className="d-flex justify-content-center"
        type="checkbox"
        checked={cbIsChecked}
        onChange={() => toggleBtnEnabled()}
        label={checkboxLabel}
      />
    </Form.Group>
  </Form>
}

export default SummaryForm;