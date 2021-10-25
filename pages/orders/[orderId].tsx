import * as React from "react";

import { useRouter } from "next/router";
import { NextPage } from "next";
import absoluteUrl from "next-absolute-url";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import OrderDetail from "../../components/orders/orderDetail";

// Page for displaying the order details and detail component

const OrderDetailPage: NextPage<{ orderData: {} }> = (props) => {
  const router = useRouter();

  const orderId = router.query.orderId;

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Order Detail
        </Typography>
        <OrderDetail orderData={props.orderData} />
      </Box>
    </Container>
  );
};

export default OrderDetailPage;

export async function getServerSideProps(context: any) {
  const orderId = context.params.orderId;

  var reqHeaders = new Headers();
  reqHeaders.append("OrderId", orderId);

  var requestOptions = {
    method: "GET",
    headers: reqHeaders,
  };

  const req = context.req;
  const { origin } = absoluteUrl(req, req.headers.host);

  const orderDataResponse = await fetch(
    origin + "/api/orders/get-order",
    requestOptions
  );
  const orderDataJson = await orderDataResponse.json();

  return {
    props: {
      orderData: orderDataJson,
    },
  };
}
