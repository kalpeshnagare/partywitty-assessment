import { createFileRoute } from "@tanstack/react-router";
import { ShowVibePage } from "@/pages/ShowVibe";

export const Route = createFileRoute("/show-vibe")({
  component: ShowVibePage,
  head: () => ({ meta: [{ title: "Show Your Vibe — PartyWitty" }] }),
});
