import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { DropdownProvider } from "./context/DropdownContext.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { BiSolidErrorAlt } from "react-icons/bi";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DropdownProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Toaster
          position="top-center"
          duration={3000}
          icons={{
            error: <BiSolidErrorAlt />,
          }}
          toastOptions={{
            classNames: {
              toast: "px-4 py-2 gap-4",
              icon: "size-6",
              error: "bg-error-light text-error",
              success: "bg-success-light text-success",
            },
          }}
        />
      </DropdownProvider>
    </QueryClientProvider>
  );
};

export default App;
