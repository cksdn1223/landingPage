import { useEffect, useState } from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import Header from "./Header";
import Footer from "./Footer";

function MainPage() {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bestSeller = document.getElementById("best-seller");
      if (!bestSeller) return;

      const rect = bestSeller.getBoundingClientRect();
      const headerHeight = 70; // 헤더 높이(대략 64~80px)

      // BestSeller의 상단이 헤더 높이보다 위로 올라오면 헤더 감추기
      if (rect.top <= headerHeight) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 첫 렌더 시 한 번 체크

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f3ef] text-neutral-900">
      <Header hidden={hideHeader} />
      <main>
        <Banner />
        <BestSeller />
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;