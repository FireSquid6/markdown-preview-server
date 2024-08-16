import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import { Logestic } from "logestic"
import { staticPlugin } from "@elysiajs/static"


export const app = new Elysia()
  .use(cors())
  .use(Logestic.preset("fancy"))
  .use(staticPlugin({
    assets: "public",
    prefix: "/",
  }))
