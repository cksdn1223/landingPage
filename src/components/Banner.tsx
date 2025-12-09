import { useEffect, useState } from "react";
import { Slide } from "../type";

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "연말 원목가구 기획전",
    subtitle: "전 품목 10% 할인 + 추가 쿠폰 증정",
    description:
      "따뜻한 원목으로 겨울 집 꾸미기. 회원 전용 혜택이 자동 적용됩니다.",
    period: "2025. 12. 01 ~ 12. 31",
    imageUrl:
      "https://images.pexels.com/photos/3965520/pexels-photo-3965520.jpeg?auto=compress&cs=tinysrgb&w=1600", // 거실 테이블·장식장
  },
  {
    id: 2,
    title: "신혼부부 거실 패키지",
    subtitle: "소파 + 테이블 + TV장 세트 특가",
    description:
      "작은 거실에도 어울리는 컴팩트 구성. 설치 기사 방문 포함 가격입니다.",
    period: "2025. 11. 10 ~ 12. 20",
    imageUrl:
      "https://images.pexels.com/photos/3965535/pexels-photo-3965535.jpeg?auto=compress&cs=tinysrgb&w=1600", // 큰 원목 책장 세트
  },
  {
    id: 3,
    title: "서재·작업실 데스크 위크",
    subtitle: "높이·폭 맞춤 데스크 무료 옵션",
    description:
      "집중이 잘 되는 서재 공간을 위한 원목 책상 컬렉션. 케이블홀 옵션까지 무료.",
    period: "2025. 12. 05 ~ 12. 19",
    imageUrl:
      "https://images.pexels.com/photos/3965526/pexels-photo-3965526.jpeg?auto=compress&cs=tinysrgb&w=1600", // 심플한 원목 책상
  },
  {
    id: 4,
    title: "북유럽 감성 식탁전",
    subtitle: "6인 식탁 구매 시 의자 2개 추가 증정",
    description:
      "둥근 모서리와 따뜻한 색감의 식탁 라인업. 가족이 모이는 공간을 완성하세요.",
    period: "2025. 12. 08 ~ 12. 25",
    imageUrl:
      "https://images.pexels.com/photos/3965522/pexels-photo-3965522.jpeg?auto=compress&cs=tinysrgb&w=1600", // 원목 식탁 세트
  },
  {
    id: 5,
    title: "거실 수납장 모음전",
    subtitle: "TV장 · 거실장 최대 20% 세트 할인",
    description:
      "리빙룸 분위기를 깔끔하게 정리해 주는 수납장 컬렉션을 한 번에 모았습니다.",
    period: "2026. 01. 02 ~ 01. 20",
    imageUrl:
      "https://images.pexels.com/photos/3965550/pexels-photo-3965550.jpeg?auto=compress&cs=tinysrgb&w=1600", // 로우 TV장
  },
  {
    id: 6,
    title: "홈오피스 패키지",
    subtitle: "책상 + 서랍장 + 책장 세트 구성",
    description:
      "원목의 따뜻함은 살리고, 작업 효율은 높이는 홈오피스 레이아웃 제안전.",
    period: "2026. 01. 10 ~ 02. 05",
    imageUrl:
      "https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&cs=tinysrgb&w=1600", // 낮은 원목 수납장
  },
  {
    id: 7,
    title: "키즈룸 원목 시리즈",
    subtitle: "안전 모서리 · 친환경 도장 기본",
    description:
      "아이 방을 위한 저상 침대, 장난감 수납장, 책장까지 한 번에 만나보세요.",
    period: "2026. 02. 01 ~ 02. 28",
    imageUrl:
      "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600", // 낮은 책장+소품
  },
  {
    id: 8,
    title: "베스트셀러 리턴즈",
    subtitle: "지난 3년간 가장 많이 사랑받은 제품 재입고",
    description:
      "오래 기다려 주신 베스트셀러 제품들을 한정 수량으로 다시 만나보세요.",
    period: "2026. 03. 01 ~ 03. 15",
    imageUrl:
      "https://images.pexels.com/photos/3965555/pexels-photo-3965555.jpeg?auto=compress&cs=tinysrgb&w=1600", // 거실 원목 가구들
  },
];

const AUTO_INTERVAL = 5000;

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = SLIDES.length;

  const goTo = (idx: number) => {
    setCurrentIndex((idx + length) % length);
  };

  const handleNext = () => goTo(currentIndex + 1);
  const handlePrev = () => goTo(currentIndex - 1);

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, AUTO_INTERVAL);

    return () => clearInterval(timer);
  }, [length]);

  return (
    <>
      <section className="relative h-[700px] w-full overflow-hidden bg-black">
        {/* 슬라이드들 (페이드 인/아웃) */}
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-0"
                }`}
            >
              {/* 배경 이미지 */}
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="h-full w-full object-cover"
              />

              {/* 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/5" />

              {/* 텍스트 영역 */}
              <div className="absolute left-8 top-1/2 max-w-xl -translate-y-1/2 text-white md:left-20">
                <p className="text-2xl font-semibold md:text-4xl">
                  {slide.title}
                </p>
                <p className="mt-4 text-lg md:text-2xl">{slide.subtitle}</p>
                <p className="mt-5 text-sm text-neutral-200">
                  {slide.description}
                  <br />
                  {slide.period}
                </p>

                <button className="mt-8 rounded-full border border-white/80 bg-transparent px-6 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/15">
                  자세히 보기
                </button>

                <p className="mt-6 text-xs text-neutral-200/80">
                  {idx + 1} / {length}
                </p>
              </div>
            </div>
          );
        })}

        {/* 좌우 화살표 */}
        <button
          className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/25 p-3 text-white backdrop-blur hover:bg-black/40"
          onClick={handlePrev}
          aria-label="이전 배너"
        >
          ‹
        </button>
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/25 p-3 text-white backdrop-blur hover:bg-black/40"
          onClick={handleNext}
          aria-label="다음 배너"
        >
          ›
        </button>

        {/* 하단 인디케이터 점 */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goTo(idx)}
              className={`h-1.5 w-6 rounded-full transition ${idx === currentIndex
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`${idx + 1}번 배너로 이동`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Banner;