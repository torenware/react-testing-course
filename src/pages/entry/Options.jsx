import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import ErrorAlert from '../../components/ErrorAlert';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    const URI = `http://localhost:3030/${optionType}`;
    axios
      .get(URI)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO: handle error response
        console.log('Failed for option type', optionType);
        setFetchErr(error);
      });
  }, [optionType]);

  if (fetchErr) {
    return <Row>
      <ErrorAlert message={"oops"} />
    </Row>
  }
  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
