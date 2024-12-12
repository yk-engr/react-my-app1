import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "About", content: "About" },
  ];
}

export function loader() {
  return {
    description: "このサイトの説明"
  }
}

export default function About({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div>{loaderData.description}</div>
    </>
  );
}
