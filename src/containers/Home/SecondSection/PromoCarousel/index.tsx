import Carousel from "react-multi-carousel";

const PromoCarousel = () => {
  return (
    <>
      <h3 className="text-heading-3 font-label text-white font-bold pt-14 mb-4">
        Promo Liburan
      </h3>

      <Carousel
        className="py-5"
        containerClass="carousel-container"
        arrows
        centerMode={false}
        draggable
        swipeable
        customLeftArrow={
          <button
            type="button"
            aria-label="Go to previous slide"
            className="absolute z-50 left-0 opacity-50 hover:opacity-100"
          >
            <img src="/assets/icons/left-arrow-rounded.svg" alt="previous" />
          </button>
        }
        customRightArrow={
          <button
            type="button"
            aria-label="Go to next slide"
            className="absolute z-50 right-0 opacity-50 hover:opacity-100"
          >
            <img src="/assets/icons/right-arrow-rounded.svg" alt="next" />
          </button>
        }
        partialVisible
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 720,
            },
            items: 2,
            partialVisibilityGutter: 100,
          },
        }}
      >
        <article className="bg-white shadow-xl rounded-xl overflow-hidden w-[500px] h-[312px] flex"></article>
        <article className="bg-white shadow-xl rounded-xl overflow-hidden w-[500px] h-[312px] flex"></article>
        <article className="bg-white shadow-xl rounded-xl overflow-hidden w-[500px] h-[312px] flex"></article>
      </Carousel>
    </>
  );
};

export default PromoCarousel;
