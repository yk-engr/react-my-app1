import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  // root.tsxの <Outlet /> を配置した箇所でレンダリングされる
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  layout("layouts/auths/layout.tsx", [
    // auths/layout.tsx内の <Outlet /> を配置した箇所でレンダリングされる
    route("login", "routes/auths/login.tsx"),
    route("logout", "routes/auths/logout.tsx"),
  ]),

  layout("layouts/bases/layout.tsx", [
    // bases/layout.tsx内の <Outlet /> を配置した箇所でレンダリングされる
    route("profile", "routes/users/profile.tsx"),
  ]),

  ...prefix("todos", [
    // root.tsxの <Outlet /> を配置した箇所でレンダリングされる
    index("routes/todos/home.tsx"),
    route("detail", "routes/todos/detail.tsx")
  ]),

] satisfies RouteConfig;
