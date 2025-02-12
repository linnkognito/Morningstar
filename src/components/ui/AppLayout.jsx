import { Outlet } from "react-router";
import Header from "./header/Header";
import PromotionBar from "./header/PromotionBar";

function AppLayout() {
  return (
    <div className="flex h-screen w-screen flex-col items-center overflow-x-hidden bg-pearl">
      <PromotionBar code="SPRING" />
      <Header />

      {/* <main className="h-full min-h-fit w-full grow bg-pearl pb-[64px] sm:pb-0"> */}
      <main className="w-full grow bg-pearl pb-[64px] sm:pb-0">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
