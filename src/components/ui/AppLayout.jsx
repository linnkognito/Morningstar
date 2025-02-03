import { Outlet } from "react-router";
import Header from "./header/Header";
import PromotionBar from "./header/PromotionBar";

function AppLayout() {
  return (
    <div className="flex h-screen max-h-screen w-screen flex-col items-center overflow-x-hidden bg-offblack">
      <PromotionBar code="SPRING" />
      <Header />

      <main className="bg-cream h-full w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
