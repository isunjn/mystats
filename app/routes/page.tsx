import { type Route } from "./+types/page";

export default function Route({ params }: Route.ComponentProps) {
  return <main>{params.username}</main>;
}
