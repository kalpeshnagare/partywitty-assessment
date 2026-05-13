import { createFileRoute } from "@tanstack/react-router";
import { VerifyPromptPage } from "@/pages/VerifyPrompt";

export const Route = createFileRoute("/verify-prompt")({
  component: VerifyPromptPage,
  head: () => ({ meta: [{ title: "You're One Step Away — PartyWitty" }] }),
});
