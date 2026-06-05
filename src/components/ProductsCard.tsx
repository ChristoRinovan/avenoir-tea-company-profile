import { useState } from "react";
import { productsCard } from "../data/ProductsCard";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GiThreeLeaves } from "react-icons/gi";

function ProductsCard() {
  const [currentPage, setCurrentPage] = useState(0);

  const product = productsCard[currentPage];
  const totalPage = productsCard.length;

  const nextSlide = () => {
    setCurrentPage((currentPage + 1) % totalPage);
  };

  const prevSlide = () => {
    setCurrentPage((currentPage - 1 + totalPage) % totalPage);
  };

  return (
    <div className="container mx-auto mb-15">
      <div className="flex items-center justify-center gap-5">
        {/* dekstop wok */}
        <button
          onClick={prevSlide}
          className="hidden lg:block btn rounded-full bg-[#fac9b1] text-utama"
        >
          <GrPrevious />
        </button>

        {/* product card */}
        <div
          key={currentPage}
          className="w-80 h-full lg:w-180 lg:h-full animate-[slideIn_0.8s_ease-in-out] flex flex-col lg:flex-row overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src={product.img}
            alt={product.alt}
            className="h-full w-full object-cover lg:w-90"
          />

          <div className="flex max-h-90 flex-col items-center bg-[#ffece3] px-5 py-5 text-center lg:h-auto lg:w-full lg:p-10">
            <div className="flex flex-col items-center">
              <h3 className="font-desc text-[22px] font-bold tracking-wide text-utama lg:text-2xl">
                {product.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 lg:mt-3">
                <div className="h-px w-10 bg-utama lg:w-15"></div>
                <GiThreeLeaves className="text-utama" />
                <div className="h-px w-10 bg-utama lg:w-15"></div>
              </div>

              <p className="mt-5 font-par text-[15px] leading-relaxed text-utama lg:mt-4 lg:text-[15px] lg:text-justify">
                {product.description}
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-utama lg:mt-5"></div>

            <div className="mt-auto flex flex-col items-center pt-2 lg:pt-5">
              <div className="flex items-center gap-3">
                <span className="font-uang text-3xl font-bold text-utama">
                  ${product.price}.00
                </span>

                <span className="font-uang text-lg font-bold text-red-500/80 line-through">
                  ${product.price * 2}.00
                </span>
              </div>

              <button className="mt-3 rounded-lg bg-utama px-6 py-3 font-semibold text-white lg:mt-4">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* desktop juga */}
        <button
          onClick={nextSlide}
          className="hidden lg:block btn rounded-full bg-[#fac9b1] text-utama"
        >
          <GrNext />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="mt-5 flex justify-center gap-5 lg:hidden">
        <button
          onClick={prevSlide}
          className="btn rounded-full bg-[#fac9b1] text-utama"
        >
          <GrPrevious />
        </button>

        <button
          onClick={nextSlide}
          className="btn rounded-full bg-[#fac9b1] text-utama"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default ProductsCard;
