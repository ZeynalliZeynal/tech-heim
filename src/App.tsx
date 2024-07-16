import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { DropdownProvider } from "./context/DropdownContext.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DropdownProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition="bottom-left" />
      </DropdownProvider>
    </QueryClientProvider>
  );
};

export default App;
