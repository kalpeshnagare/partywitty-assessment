import { createFileRoute } from "@tanstack/react-router";
import { VerifyFacePage } from "@/pages/VerifyFace";

export const Route = createFileRoute("/verify-face")({
  component: VerifyFacePage,
  head: () => ({ meta: [{ title: "Face Verification — PartyWitty" }] }),
});
