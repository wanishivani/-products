import storeItems from "../Data/Items";
import { Col, Row } from "react-bootstrap";
import { StoreItems } from './Components/StoreItems';
 function Store() {
  return (
    <>
      <h4>MUSIC</h4>
      <Row md={2} xs={2} lg={2} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Store;
