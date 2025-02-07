import { Outlet } from "react-router";
import Header from "./header/Header";
import PromotionBar from "./header/PromotionBar";

function AppLayout() {
  return (
    <div className="flex h-screen max-h-screen w-screen flex-col items-center overflow-x-hidden">
      <PromotionBar code="SPRING" />
      <Header />

      <main className="h-full w-full grow bg-pearl px-[2px] pb-[69px] sm:pb-2">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
