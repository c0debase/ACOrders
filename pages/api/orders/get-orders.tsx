const config = require("../config.json");

// API route for /api/orders/get-orders for enumerating all orders
// Date of purchase, Payment Processor, Username, Total, Quantity, Subscription

function createData(
  uuid: string,
  purchasedAt: string,
  paymentProcessor: string,
  username: string,
  total: number,
  quantity: number,
  subscription: boolean
) {
  return {
    uuid,
    purchasedAt,
    paymentProcessor,
    username,
    total,
    quantity,
    subscription,
  };
}

const sampleResponse = {
  data: [
    {
      uuid: "string",
      purchased_at: "2021-10-24",
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
      cancelled_at: "2021-10-24",
      deleted: "2021-10-24",
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
    {
      uuid: "stringa",
      purchased_at: "2021-10-24",
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
      cancelled_at: "2021-10-24",
      deleted: "2021-10-24",
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
    {
      uuid: "stringb",
      purchased_at: "2021-10-24",
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
      cancelled_at: "2021-10-24",
      deleted: "2021-10-24",
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
    {
      uuid: "stringc",
      purchased_at: "2021-10-24",
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
      cancelled_at: "2021-10-24",
      deleted: "2021-10-24",
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
  ],
  total: 4,
  has_more: false,
};

const generateTableData = (response: any) => {
  let rows: any = [];

  for (let i = 0; i < response.data.length; i++) {
    let item = response.data[i];
    rows.push(
      createData(
        item.uuid,
        item.purchased_at,
        item.payment_processor,
        item.user.username,
        item.total,
        item.order_items.length,
        item.is_subscription
      )
    );
  }
  return rows;
};

const handler = async (req: any, res: any) => {
  if (req.method === "GET") {
    // const data = req.body;

    let reqHeaders = new Headers();
    reqHeaders.append("accept", "application/json");
    reqHeaders.append("Authorization", "Bearer " + config.token);

    let requestOptions: any = {
      method: "GET",
      headers: reqHeaders,
      redirect: "follow",
    };

    try {
      const ordersListReponse: any = await fetch(
        "https://api.upgrade.chat/v1/orders",
        requestOptions
      );
      const ordersListJson = await ordersListReponse.json();
      console.log(ordersListJson);
      if (ordersListJson["data"].length < 1) {
        res.status(201).json(generateTableData(sampleResponse));
      } else {
        res.status(201).json(generateTableData(ordersListJson));
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
};

export default handler;
