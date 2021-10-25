import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";
import Typography from "@mui/material/Typography";
import Orders from "../../components/orders/orders";

// Page for displaying the list of orders in an order table

const OrdersPage: NextPage = (props: any) => {
  const router = useRouter();

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Orders
      </Typography>
      <Orders rows={props.rows} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const req = context.req;
  const { origin } = absoluteUrl(req, req.headers.host);
  const ordersResponseData = await fetch(origin + "/api/orders/get-orders");
  const ordersTableData = await ordersResponseData.json();

  return {
    props: {
      rows: ordersTableData,
    },
  };
}

export default OrdersPage;
