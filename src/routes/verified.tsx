import { createFileRoute } from "@tanstack/react-router";
import { VerifiedPage } from "@/pages/Verified";

export const Route = createFileRoute("/verified")({
  component: VerifiedPage,
  head: () => ({ meta: [{ title: "You're Verified — PartyWitty" }] }),
});
