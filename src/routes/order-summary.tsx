import { createFileRoute } from "@tanstack/react-router";
import { OrderSummaryPage } from "@/pages/OrderSummary";

export const Route = createFileRoute("/order-summary")({
  component: OrderSummaryPage,
  head: () => ({ meta: [{ title: "Order Summary — PartyWitty" }] }),
});
