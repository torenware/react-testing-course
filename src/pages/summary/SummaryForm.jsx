import { useState } from 'react';

const SummaryForm = () => {
  const [cbIsChecked, setCbIsChecked] = useState(false);

  const toggleBtnEnabled = () => {
    console.log("before", cbIsChecked);
    setCbIsChecked(!cbIsChecked);
    console.log("after", cbIsChecked);
  };

  return <form>
    <p>Summary Form</p>
    <button disabled={!cbIsChecked}>Order Sundae</button>
    <div className="mb3 form-check">
      <label>
        <input type="checkbox"
          checked={cbIsChecked}
          onChange={() => toggleBtnEnabled()}
        />
        Activate Button
      </label>
    </div>
  </form>
}

export default SummaryForm;