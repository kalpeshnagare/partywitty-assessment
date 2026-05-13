import { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";

const RootComponent = () => <Outlet />;

const NotFoundComponent = () => (
  <div className="flex min-h-screen items-center justify-center bg-app-bg px-4">
    <div className="max-w-md text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-7xl font-bold text-app-dark"
      >
        404
      </motion.h1>
      <p className="mt-2 text-sm text-app-muted">Page not found</p>
      <Link to="/feed">
        <GradientButton className="mt-6">Go to Feed</GradientButton>
      </Link>
    </div>
  </div>
);

const ErrorComponent = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-app-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-app-dark">Something went wrong</h1>
        <p className="mt-2 text-sm text-app-muted">{error.message}</p>
        <GradientButton
          onClick={() => {
            void router.invalidate();
            reset();
          }}
          className="mt-6"
        >
          Try again
        </GradientButton>
      </div>
    </div>
  );
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PartyWitty — Nightlife Social" },
      {
        name: "description",
        content: "Spot your person, send a drink, and make tonight unforgettable.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
