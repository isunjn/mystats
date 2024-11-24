import { db } from "@/lib/db";
import { type Route } from "./+types/page";

export async function loader({ params }: Route.LoaderArgs) {
  console.log(params.username);
  const result = await db.execute(`select 1`);
  return result.columns;
}

export default function Route({ params, loaderData }: Route.ComponentProps) {
  return <main>{params.username}{JSON.stringify(loaderData)}</main>;
}
