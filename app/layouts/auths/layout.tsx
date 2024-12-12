import type { Route } from "./+types/layout";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Auth Layout" },
    { name: "Auth Layout", content: "Auth Layout" },
  ];
}

export default function Layout() {
  return (
    <>
      <div>認証のレイアウト</div>
      <Outlet />
    </>
   );
}
