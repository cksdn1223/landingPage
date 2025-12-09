import { ListIcon, SearchIcon, ShoppingCart, User } from "lucide-react";
import Logo from "./Logo";
type HeaderProps = {
  hidden?: boolean;
};

function Header({ hidden }: HeaderProps) {
  return (
    <header
      className={
        `sticky top-0 z-20 border-b border-neutral-200 py-4 bg-[#f4f0ea]
        transition-all duration-300 ease-in-out
        ` +
        (hidden
          ? " -translate-y-full opacity-0 pointer-events-none"
          : " translate-y-0 opacity-100")
      }
    >
      <div className="mx-auto flex items-center justify-evenly max-w-full px-16 py-4">
        {/* 로고 */}
        <Logo />
        {/* 가운데 메뉴 */}
        <nav className="hidden flex-1 items-center justify-center gap-7 text-lg text-neutral-700 lg:flex">
          <button className="transition-colors hover:text-amber-800">
            시리즈
          </button>
          <button className="transition-colors hover:text-amber-800">
            브랜드
          </button>
          <button className="transition-colors hover:text-amber-800">
            전체제품
          </button>
          <button className="transition-colors hover:text-amber-800">
            컬렉션
          </button>
          <button className="transition-colors hover:text-amber-800">
            기획전
          </button>
          <button className="transition-colors hover:text-amber-800">
            쇼룸안내
          </button>
          <button className="transition-colors hover:text-amber-800">
            구매후기
          </button>
          <button className="transition-colors hover:text-amber-800">
            커뮤니티
          </button>
          <button className="transition-colors hover:text-amber-800">
            이벤트
          </button>
        </nav>

        {/* 우측 아이콘/버튼 */}
        <div className="flex items-center gap-5">
          {/* 아이콘 영역 */}
          <div className="flex items-center gap-6 text-lg text-neutral-700">
            <ShoppingCart aria-label="cart" className="hover:cursor-pointer w-7 h-7 hover:text-amber-800" />
            <User aria-label="mypage" className="hover:cursor-pointer w-7 h-7 hover:text-amber-800" />
            <SearchIcon aria-label="search" className="hover:cursor-pointer w-7 h-7 hover:text-amber-800" />
            <ListIcon aria-label="menu" className="hover:cursor-pointer w-7 h-7 hover:text-amber-800" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
