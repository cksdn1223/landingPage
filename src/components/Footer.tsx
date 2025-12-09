function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f7f3ef]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-start md:justify-between">
        {/* 왼쪽: 로고/브랜드 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-[0.35em] text-neutral-900">
              WOOD
            </span>
            <span className="rounded-full bg-[#c06a2b] px-2 py-0.5 text-[10px] font-medium text-white">
              ORIGINAL
            </span>
          </div>
          <p className="text-[11px] leading-relaxed text-neutral-500">
            우드는 일상 공간에 어울리는 원목 가구를 제안하는 온라인 셀렉트샵입니다.
            <br />
            수종 선택부터 설치까지, 편안한 구매 경험을 고민합니다.
          </p>
          <p className="text-[11px] text-neutral-400">
            © {new Date().getFullYear()} WOOD. All rights reserved.
          </p>
        </div>

        {/* 가운데: 링크들 */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-[11px] text-neutral-600 md:grid-cols-3">
          <div className="space-y-1">
            <p className="mb-1 text-[11px] font-semibold text-neutral-800">
              쇼핑가이드
            </p>
            <button className="block hover:text-[#c06a2b]">주문/결제 안내</button>
            <button className="block hover:text-[#c06a2b]">배송 안내</button>
            <button className="block hover:text-[#c06a2b]">교환/반품 정책</button>
          </div>
          <div className="space-y-1">
            <p className="mb-1 text-[11px] font-semibold text-neutral-800">
              고객센터
            </p>
            <button className="block hover:text-[#c06a2b]">자주 묻는 질문</button>
            <button className="block hover:text-[#c06a2b]">1:1 문의</button>
            <button className="block hover:text-[#c06a2b]">A/S 신청</button>
          </div>
          <div className="space-y-1">
            <p className="mb-1 text-[11px] font-semibold text-neutral-800">
              ABOUT
            </p>
            <button className="block hover:text-[#c06a2b]">브랜드 스토리</button>
            <button className="block hover:text-[#c06a2b]">원목 수종 가이드</button>
            <button className="block hover:text-[#c06a2b]">쇼룸 안내</button>
          </div>
        </div>

        {/* 오른쪽: 연락처/시간 */}
        <div className="space-y-2 text-[11px] text-neutral-600">
          <p className="text-[11px] font-semibold text-neutral-800">
            고객센터
          </p>
          <p className="text-sm font-semibold text-[#c06a2b]">0000-0000</p>
          <p>평일 10:00 - 18:00 (점심 12:30 - 13:30)</p>
          <p className="text-neutral-500">
            토/일/공휴일 및 설·추석 연휴는 휴무입니다.
          </p>
          <p className="pt-1 text-neutral-400">
            이메일 문의 : abcd@wood.shop
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
