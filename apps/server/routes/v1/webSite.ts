import { Hono } from "hono";

const app = new Hono();

app.get('./', c => c.text("hi222"))

export default app;