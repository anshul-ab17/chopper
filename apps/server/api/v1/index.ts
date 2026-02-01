import { Hono } from "hono";
import user from "./user";
import webSite from "./webSite";

const router = new Hono();

router.all("/", (c) => c.text("v1"));


router.route('/user',user);
router.route('/website',webSite);

export default router;