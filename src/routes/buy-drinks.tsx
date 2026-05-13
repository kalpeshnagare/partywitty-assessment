import { createFileRoute } from "@tanstack/react-router";
import { BuyDrinksPage } from "@/pages/BuyDrinks";

export const Route = createFileRoute("/buy-drinks")({
  component: BuyDrinksPage,
  head: () => ({ meta: [{ title: "Buy Drinks — PartyWitty" }] }),
});
