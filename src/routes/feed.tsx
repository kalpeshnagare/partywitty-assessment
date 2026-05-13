import { createFileRoute } from "@tanstack/react-router";
import { FeedPage } from "@/pages/Feed";

export const Route = createFileRoute("/feed")({
  component: FeedPage,
  head: () => ({ meta: [{ title: "Explore Feed — PartyWitty" }] }),
});
