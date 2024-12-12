import type { Route } from "./+types/profile";

export function loader() {
  return {
    name: "田中 太郎",
    gender: "男性",
    birthday: "2000/05/03"
  }
}

export default function Profile({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div>名前: {loaderData.name}</div>
      <div>性別: {loaderData.gender}</div>
      <div>誕生日: {loaderData.birthday}</div>
    </>
  );
}
