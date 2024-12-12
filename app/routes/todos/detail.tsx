import type { Route } from "./+types/detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function TodosDetail() {
  return <div>Todoの詳細</div>;
}
  