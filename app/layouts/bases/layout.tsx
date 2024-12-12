import type { Route } from "./+types/layout";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Base Layout" },
    { name: "Base Layout", content: "Base Layout" },
  ];
}

export default function Layout() {
  return (
    <>
      <div>基本のレイアウト</div>
      <Outlet />
    </>
   );
}
