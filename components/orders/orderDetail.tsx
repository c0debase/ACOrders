import { ListItem } from "@mui/material";
import * as React from "react";

// Functional component for displayed details of a single order

const OrderDetail: React.FC<{ orderData: any }> = (props) => {
  let orderFields = props.orderData.data;

  return (
    <>
      Purchased: {orderFields.purchased_at}
      <br />
      Payment Processor: {orderFields.payment_processor}
      <br />
      Username: {orderFields.user.username}
      <br />
      Email: {orderFields.user.email}
      <br />
      Subtotal: {orderFields.subtotal}
      <br />
      Discount: {orderFields.discount}
      <br />
      Total: {orderFields.total}
      <br />
      Subscription: {orderFields.is_subscription ? "Yes" : "No"}
      <br />
      Cancelled: {orderFields.cancelled_at}
      <br />
      Deleted: {orderFields.deleted}
      <br/><br/>
      {orderFields.order_items.map((orderItem: any, idx: any) => (
        <div key={idx}>
        <h4>Item {idx + 1}</h4>
          Price: {orderItem.price}
          <br />
          Quantity: {orderItem.quantity}
          <br />
          Trial Length: {orderItem.free_trial_length}
          <br />
          Limited Time: {orderItem.is_time_limited ? 'Yes' : 'No'}
          <br />
          Product Name: {orderItem.product.name}
        </div>
      ))}
    </>
  );
};

export default OrderDetail;
