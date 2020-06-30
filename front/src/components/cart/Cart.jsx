import React from 'react';
import "./style.css";
import { Modal, Button, Form } from "react-bootstrap";


export default ({ orders, total, username, handleChange, disabledButton, handleClick, handleComplete, openModal, closeModal, showModal, cartInvitado }) => (

  <div className="container">
   
<div className="card" style={{marginTop:"50px" ,marginBottom:"20px"}}>
<div className="card-body">

<p className="division">Carrito de {username ? username.split("@").shift() : "Invitado"}:</p>
 <div class="table-responsive">

   <table className="table product-table">

     <thead className="mdb-color lighten-5">
       <tr>
         <th></th>
         <th className="font-weight-bold">
           <strong className="izq">Producto</strong>
         </th>
         <th className="font-weight-bold" style={{paddingRight:"34px"}}>
           <strong>Valoracion</strong>
         </th>
         <th></th>
         <th className="font-weight-bold" style={{paddingRight:"84px"}}>
           <strong>Precio</strong>
         </th>
         <th className="font-weight-bold"style={{paddingRight:"70px"}}>
           <strong>Cantidad</strong>
         </th>
         <th className="font-weight-bold" style={{paddingRight:"45px"}}>
           <strong>Total</strong>
         </th>
         <th style={{paddingRight:"45px"}}></th>
       </tr>
     </thead>
    
     <tbody>
        {username ? ( orders.products ? (<>{orders.products.map((product) => (
                    <tr key={product.id} id="the" className={`c${product.id}`} style={{verticalAlign:"initial"}}>
                    <th scope="row" className="img" style={{verticalAlign:"middle"}}>
                      <img src={product.image} alt="" className="img-fluid z-depth-0"/>
                    </th>
                    <td className="tds">
                      <h5 className="mt-3 izq">
                        <strong>{product.name}</strong>
                      </h5>
                      <p className="text-muted izq">{product.category}</p>
                    </td>
                    <td className="tds" style={{verticalAlign:"initial", paddingLeft:"50px"}}>{product.valoration} </td>
                    <td className="tds"></td>
                    <td className="tds">${product.price}</td>
                    <td className="tds">
                      <input id={product.id} placeholder={product.order.cant} min="1" max="10" onChange={(e)=>handleChange(product.id, product.price, e)} type="number" aria-label="Search" className="form-control"  style={{width: "100px"}}/>
                    </td>
                    <td className="tds">
                      <strong className={"subtotal"} id={`total${product.id}`}>{product.price * product.order.cant}</strong>
                    </td>
                    <td className="tds">
              <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" onClick={() => handleClick(product.id)} 
                        title="Remove item">X
                      </button>
                    </td>
                  </tr>   
                ))}</>) : (<><tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
              </tr></>)) : ( cartInvitado ? (<>{cartInvitado.map((product) => (
                    <tr key={product.id} id="the" className={`c${product.id}`} style={{verticalAlign:"initial"}}>
                    <th scope="row" className="img" style={{verticalAlign:"middle"}}>
                      <img src={product.image} alt="" className="img-fluid z-depth-0"/>
                    </th>
                    <td className="tds">
                      <h5 className="mt-3 izq">
                        <strong>{product.name}</strong>
                      </h5>
                      <p className="text-muted izq">{product.category}</p>
                    </td>
                    <td className="tds" style={{verticalAlign:"initial", paddingLeft:"50px"}}>{product.valoration} </td>
                    <td className="tds"></td>
                    <td className="tds">${product.price}</td>
                    <td className="tds">
                      <input id={product.id} placeholder="1" min="1" max="10" onChange={(e)=>handleChange(product.id, product.price, e)} type="number" aria-label="Search" className="form-control"  style={{width: "100px"}}/>
                    </td>
                    <td className="tds">
                      <strong className={"subtotal"} id={`total${product.id}`}>{product.price}</strong>
                    </td>
                    <td className="tds">
              <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" onClick={() => handleClick(product.id)} 
                        title="Remove item">X
                      </button>
                    </td>
                  </tr>   
                ))}</>) : (<><tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
              </tr></>)) }

     </tbody>
   </table>
 </div>

{orders.products ? 

 <table className="table product-table">
<tbody>
 <tr className="precioFinal">
 <td colspan="3"></td>
 <td>
   <h4 >
     <strong>Total:</strong>
   </h4>
 </td>
 <td className="total">
   <h4 >
     <strong id="totalfinal">{total(orders.products)} ARS</strong>
   </h4>
 </td>
 <td colspan="3" className="text-right">
   <button type="button" className="btn btn-primary btn-rounded" onClick = {()=> openModal()}>Completar Compra</button>
 </td>
</tr>
</tbody>
</table>
 

 : 
 
 
 <h4 >
 <strong>Total: </strong><strong id="totalfinal">0 ARS</strong>
</h4>}

</div>
</div>
    <Modal show={showModal} onHide={closeModal}>
      <Form>
        <Modal.Header>
          <Modal.Title>Antes de finalizar...</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group>
            <Form.Label>Confirmar direccion</Form.Label>
            <Form.Control type="text" style={{ width: "100%" }} placeholder="Direccion" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Codigo postal</Form.Label>
            <Form.Control type="text" style={{ width: "100%" }} placeholder="CP" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Numero de tarjeta de credito</Form.Label>
            <Form.Control type="text" style={{width:"100%"}} placeholder="Ingrese los 16 digitos del frente de su tarjeta" />
          </Form.Group>
          <Form.Group>
            <Form.Label>CCV</Form.Label>
            <Form.Control type="password" placeholder="Ingrese los 3 digitos del dorso de la tarjeta" />
          </Form.Group>
        </Modal.Body>

                <Modal.Footer>
          <Button onClick={() => handleComplete()} bsStyle="success">Confirmar</Button>
          <Button onClick={closeModal} >Cerrar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
</div>
 
)