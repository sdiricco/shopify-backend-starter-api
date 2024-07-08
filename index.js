// server.js
import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
  scopes: process.env.SHOPIFY_SCOPES.split(","),
  hostName: process.env.SHOPIFY_HOST_NAME,
  apiVersion: LATEST_API_VERSION,
});

const app = express();

// Route per ottenere i prodotti
app.get('/products', async (req, res) => {
    const shop = process.env.SHOPIFY_SHOP_NAME;
    const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;
  
    const client = new shopify.clients.Rest({
      session: {
        shop,
        accessToken,
        scope: process.env.SHOPIFY_SCOPES,
      },
    });
  
    try {
      const products = await client.get({
        path: 'products',
      });
      res.json(products.body);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching products');
    }
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
