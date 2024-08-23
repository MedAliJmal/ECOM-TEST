import React from "react";
import { Button, Carousel } from "react-bootstrap";

const CartItem = ({ el, handleIncQunatity, handleDecQunatity }) => {
  return (
    <tr>
      <td>
        <Carousel
          style={{ width: "100px" }}
          controls={false}
          indicators={false}
          interval={2000}
        >
          {el.prodIMG.map((v, i) => (
            <Carousel.Item>
              <img width={"100px"} src={v} alt={"test"} key={i} />
            </Carousel.Item>
          ))}
        </Carousel>
      </td>
      <td style={{ width: "150px" }}>{el.name}</td>
      <td>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outline-dark"
            style={{
              height: "40px",
              width: "40px",
            }}
            onClick={() => handleIncQunatity(el.id)}
          >
            +
          </Button>
          <p
            style={{ lineHeight: "100%", alignSelf: "center", margin: "15px" }}
          >
            {el.quantity}
          </p>

          <Button
            variant="outline-dark"
            style={{
              height: "40px",
              width: "40px",
              textAlign: "center",
              textJustify: "center",
            }}
            onClick={() => {
              if (el.quantity > 1) {
                handleDecQunatity(el.id);
              }
            }}
          >
            -
          </Button>
        </div>
      </td>
      <td>{el.price - (el.price * el.remise) / 100} TND</td>
      <td className="finalPrice">
        {(el.quantity * (el.price - (el.price * el.remise) / 100)).toFixed(2)}{" "}
      </td>
    </tr>
  );
};

export default CartItem;
