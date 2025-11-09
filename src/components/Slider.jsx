import React, { useEffect, useRef, useState } from "react";

const Slider = ({ children, navbarHeight = 1 }) => {
  const slides = React.Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const trackRef = useRef(null);

  const sliderHeight = `calc(100vh - ${navbarHeight}px)`;

  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation 
  useEffect(() => {
    if (isMobile) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, isMobile]);

  // Slide animation 
  useEffect(() => {
    if (isMobile || !trackRef.current) return;
    trackRef.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index, isMobile]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(count - 1, i + 1));
  const goTo = (i) => setIndex(i);

  const segmentPercent = 100 / count;
  const indicatorTranslate = index * segmentPercent;

  return (
    <div className="relative" style={{ marginTop: 0 }}>
      {/* MOBILE VIEW  normal vertical scroll */}
      {isMobile ? (
        <div
          className="flex flex-col w-full overflow-y-auto"
          style={{
            marginTop: `${navbarHeight}px`,
          }}
        >
          {slides.map((child, i) => (
            <div key={i} className="w-full">
              {child}
            </div>
          ))}
        </div>
      ) : (
        // DESKTOP VIEW  horizontal slider
        <>
          <div
            className="w-full overflow-hidden"
            style={{ height: sliderHeight, margin: 0, padding: 0 }}
          >
            <div
              ref={trackRef}
              className="flex w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
                height: "100%",
              }}
            >
              {slides.map((child, i) => (
                <div
                  key={i}
                  className="w-full shrink-0 h-full"
                  style={{ minWidth: "100%", height: "100%" }}
                >
                  {child}
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Bar */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-5 z-40 w-11/12 max-w-4xl"
            aria-hidden={false}
            style={{ pointerEvents: "auto" }}
          >
            <div className="relative h-2 bg-white/30 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="flex-1 h-full bg-transparent focus:outline-none"
                    aria-label={`Go to slide ${i + 1}`}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>

              <div
                className="absolute top-0 left-0 h-full rounded-full shadow-md"
                style={{
                  width: `${segmentPercent}%`,
                  transform: `translateX(${indicatorTranslate}%)`,
                  transition: "transform 400ms ease, width 200ms ease",
                  background: "#FDD0C1",
                }}
              />
            </div>
          </div>

        </>
      )}
    </div>
  );
};

export default Slider;
