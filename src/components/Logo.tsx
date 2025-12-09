
function Logo() {
  return (
    <>
        <div className="flex items-center gap-2">
          {/* 아이콘 (나이테 느낌) */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 shadow-sm">
            <svg
              viewBox="0 0 32 32"
              className="h-6 w-6 text-amber-900/80"
              aria-hidden="true"
            >
              <circle
                cx="16"
                cy="16"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <circle
                cx="16"
                cy="16"
                r="5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <circle cx="16" cy="16" r="2" fill="currentColor" />
            </svg>
          </div>

          {/* 텍스트 로고 */}
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.3em] text-neutral-900">
              WOOD
            </div>
            <div className="text-[10px] tracking-[0.16em] text-neutral-500 uppercase">
              solid furniture shop
            </div>
          </div>
        </div>
    </>
  );
}

export default Logo;