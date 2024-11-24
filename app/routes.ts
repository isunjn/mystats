import { index, layout, prefix, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(":username", "routes/page.tsx"),
  layout("routes/auth/layout.tsx", [
    route("login", "routes/auth/login.tsx"),
    route("signup", "routes/auth/signup.tsx"),
  ]),
  ...prefix("dash", [
    layout("routes/dash/layout.tsx", [
      index("routes/dash/index.tsx"),
      route("preview", "routes/dash/preview.tsx"),
      route("*", "routes/dash/404.tsx"),
    ]),
  ]),
  ...prefix("api", [
    route("auth/*", "routes/api/auth.ts"),
  ]),
] satisfies RouteConfig;
