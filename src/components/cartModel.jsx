import { Modal, Button } from 'react-bootstrap'
import { GusetUserServices } from '../services/guestServices'
import React, { useState, useEffect } from 'react'


const CartModel = (props) => {
  const [value, setvalue] = useState([]);
  useEffect(async () => {
    const cart_id = JSON.parse(localStorage.getItem('cart_id'))
    const result = await GusetUserServices.GetProductFromCart(cart_id.cart_id);
    setvalue(result.data);
    console.log("cart details", result.data)
  }, [])
  return (
    <>
      {value.length > 0 ?
        <Modal show={props.show} onHide={props.onhandle}>
          <Modal.Header closeButton>
            <Modal.Title>Add To Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <strong>
                Shopping Cart
              </strong>
              {value.map((item, index) => {
                return (
                  <div key={index} className='container' >
                    <div className='row'>
                      <div><img src={item.image} /></div>
                      <div>
                        <div>{item.name}</div>
                        <div>${item.price}</div>
                        <div>{item.qty}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
              <br />
              <br />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onhandle} variant="secondary">
              Close
            </Button>
            <a href="/cartDetails"> <Button variant="primary">
              View cart items
            </Button></a>
          </Modal.Footer>
        </Modal>
        : ""}
    </>
  )
}

export default CartModel