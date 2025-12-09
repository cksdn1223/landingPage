import { Product } from "../type";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "[블랙러버] A형 책장3X2",
    spec: "블랙러버 | W1120 X D290 X H930 (mm)",
    originalPrice: "790,000원",
    salePrice: "711,000원",
    imageUrl:
      "https://images.pexels.com/photos/3965535/pexels-photo-3965535.jpeg?auto=compress&cs=tinysrgb&w=800", // 큰 원목 책장
    badge: "쿠폰적용가",
  },
  {
    id: 2,
    name: "[까사] M형 책상/테이블",
    spec: "블랙러버 | W1200 X D700 X H750 (mm)",
    originalPrice: "780,000원",
    salePrice: "630,000원",
    imageUrl:
      "https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&w=800", // 원목 작업용 책상
    badge: "쿠폰적용가",
  },
  {
    id: 3,
    name: "[블랙러버] A형 책장5X2",
    spec: "블랙러버 | W1860 X D290 X H930 (mm)",
    originalPrice: "990,000원",
    salePrice: "891,000원",
    imageUrl:
      "https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&cs=tinysrgb&w=800", // 긴 낮은 원목 수납장
    badge: "쿠폰적용가",
  },
  {
    id: 4,
    name: "[그릴룸] 책장 세트",
    spec: "월넛무늬 | W2250 X D300 X H1880 (mm)",
    originalPrice: "9,550,000원",
    salePrice: "3,195,000원",
    imageUrl:
      "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800", // 책장+소품 세트 느낌
    badge: "쿠폰적용가",
  },
  {
    id: 5,
    name: "[오크컬렉션] 로우 TV장",
    spec: "화이트오크 | W1800 X D400 X H450 (mm)",
    originalPrice: "980,000원",
    salePrice: "882,000원",
    imageUrl:
      "https://images.pexels.com/photos/3965550/pexels-photo-3965550.jpeg?auto=compress&cs=tinysrgb&w=800", // 거실 TV장/수납장
    badge: "기획특가",
  },
  {
    id: 6,
    name: "[모던라인] 6인 식탁 세트",
    spec: "애쉬 | W1800 X D800 X H730 (mm)",
    originalPrice: "1,450,000원",
    salePrice: "1,190,000원",
    imageUrl:
      "https://images.pexels.com/photos/3965522/pexels-photo-3965522.jpeg?auto=compress&cs=tinysrgb&w=800", // 원목 식탁 세트
    badge: "세트할인",
  },
  {
    id: 7,
    name: "[콤팩트] 키즈 책장 3단",
    spec: "원목 | W900 X D250 X H900 (mm)",
    originalPrice: "390,000원",
    salePrice: "351,000원",
    imageUrl:
      "https://images.pexels.com/photos/3965515/pexels-photo-3965515.jpeg?auto=compress&cs=tinysrgb&w=800", // 낮은 책장+아이방 느낌
    badge: "키즈추천",
  },
  {
    id: 8,
    name: "[데일리] 기본 책상 1400",
    spec: "고무나무 | W1400 X D600 X H730 (mm)",
    originalPrice: "520,000원",
    salePrice: "468,000원",
    imageUrl:
      "https://images.pexels.com/photos/3965526/pexels-photo-3965526.jpeg?auto=compress&cs=tinysrgb&w=800", // 심플한 원목 책상
    badge: "MD추천",
  },
];

function BestSeller() {

  return (
    <>
      <section id="best-seller" className="bg-[#f7f3ef] pt-10">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-sm tracking-[0.3em] text-neutral-700">
            BEST SELLER
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="space-y-2">
                {/* 이미지: 비율 고정해서 전부 같은 크기 */}
                <div className="overflow-hidden bg-white">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
                    />
                  </div>
                </div>

                <h3 className="mt-2 text-xs text-neutral-800 hover:cursor-pointer hover:text-amber-800">{product.name}</h3>
                <p className="text-[11px] text-[#c06a2b]">{product.spec}</p>

                <div className="mt-1 flex items-center gap-2 text-xs">
                  <span className="text-neutral-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {product.salePrice}
                  </span>
                  {product.badge && (
                    <span className="rounded-sm bg-[#c06a2b] px-1.5 py-0.5 text-[10px] text-white">
                      {product.badge}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mb-8 mt-16 text-center text-[11px] text-neutral-500">
          원목가구 전체 보기는 상단 메뉴의{" "}
          <span className="font-medium text-[#c06a2b]">‘전체제품’</span>에서 확인하실 수 있어요.
          <br />
          모든 제품은 기본 설치 서비스와 1년 A/S를 제공합니다.
        </div>
      </section>
    </>
  );
}

export default BestSeller;