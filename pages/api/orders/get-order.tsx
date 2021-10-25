const config = require("../config.json");

// API route for /api/orders/get-order
// TODO: Change passing in of order ID from header to URL param

const sampleResponse = {
  data: {
    uuid: "string",
    purchased_at: "2021-10-25",
    payment_processor: "PAYPAL",
    payment_processor_record_id: "string",
    user: {
      id: 0,
      discord_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      email: "string",
      username: "string",
    },
    subtotal: 0,
    discount: 0,
    total: 0,
    type: "UPGRADE",
    is_subscription: true,
    cancelled_at: "2021-10-25",
    deleted: "2021-10-25",
    order_items: [
      {
        price: 0,
        quantity: 0,
        interval: "day",
        interval_count: 0,
        free_trial_length: 0,
        is_time_limited: true,
        type: "UPGRADE",
        discord_roles: [
          {
            discord_id: "string",
            name: "string",
          },
        ],
        product_types: ["DISCORD_ROLE"],
        product: {
          uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          name: "string",
        },
      },
    ],
  },
};

const handler = async (req: any, res: any) => {
  if (req.method === "GET") {
    const orderId = req.headers.orderid;

    let reqHeaders = new Headers();
    reqHeaders.append("accept", "application/json");
    reqHeaders.append("Authorization", "Bearer " + config.token);

    let requestOptions: any = {
      method: "GET",
      headers: reqHeaders,
      redirect: "follow",
    };

    try {
      const orderDetailResponse = await fetch(
        "https://api.upgrade.chat/v1/orders/" + orderId,
        requestOptions
      );
      const orderDetailJson = await orderDetailResponse.json();
      if (orderDetailJson.message.includes("Error")) {
        res.status(201).json(sampleResponse);
      } else {
        res.status(201).json(orderDetailJson);
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
};

export default handler;
