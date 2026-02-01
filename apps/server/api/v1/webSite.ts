import { Hono } from "hono";

const webSite = new Hono();

webSite.get("/", (c) => c.text("website"));

export default webSite;
