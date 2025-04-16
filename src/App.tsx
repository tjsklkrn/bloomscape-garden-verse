
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* These are placeholder routes for now */}
          <Route path="/categories" element={<NotFound />} />
          <Route path="/categories/:id" element={<NotFound />} />
          <Route path="/care-guides" element={<NotFound />} />
          <Route path="/care-guides/:guide" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/account" element={<NotFound />} />
          <Route path="/wishlist" element={<NotFound />} />
          <Route path="/cart" element={<NotFound />} />
          <Route path="/bestsellers" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
