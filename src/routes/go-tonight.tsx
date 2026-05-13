import { createFileRoute } from "@tanstack/react-router";
import { GoTonightPage } from "@/pages/GoTonight";

export const Route = createFileRoute("/go-tonight")({
  component: GoTonightPage,
  head: () => ({ meta: [{ title: "You Chose Her — PartyWitty" }] }),
});
