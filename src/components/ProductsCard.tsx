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
          className="hidden border-none cursor-pointer hover:opacity-90 lg:block btn rounded-full bg-button text-utama"
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
              <h3 className="font-desc text-[20px] font-bold tracking-wide text-utama lg:text-[22px]">
                {product.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 lg:mt-3">
                <div className="h-px w-10 bg-utama lg:w-15"></div>
                <GiThreeLeaves className="text-utama" />
                <div className="h-px w-10 bg-utama lg:w-15"></div>
              </div>

              <p className="mt-5 font-par text-[15px] text-utama lg:mt-4 lg:text-[15px] lg:text-justify">
                {product.description}
              </p>
            </div>

            <div className="mt-5 h-px w-full bg-utama "></div>

            <div className="mt-auto flex flex-col items-center  lg:pt-5">
              <div className="flex items-center gap-3">
                <span className="font-uang text-3xl font-bold text-utama">
                  ${product.price}.00
                </span>

                <span className="font-uang text-lg font-bold text-red-500/80 line-through">
                  ${product.price * 2}.00
                </span>
              </div>

              <button className="mt-3 rounded-lg bg-utama px-6 py-3 font-semibold text-white lg:mt-3 hover:scale-105 hover:opacity-90">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* desktop juga */}
        <button
          onClick={nextSlide}
          className="hidden border-none cursor-pointer hover:opacity-90 lg:block btn rounded-full bg-button text-utama"
        >
          <GrNext />
        </button>
      </div>

      {/* mobile */}
      <div className="mt-5 flex justify-center gap-5 lg:hidden">
        <button
          onClick={prevSlide}
          className="btn border-none cursor-pointer hover:opacity-90 rounded-full bg-button text-utama"
        >
          <GrPrevious />
        </button>

        <button
          onClick={nextSlide}
          className="btn border-none cursor-pointer hover:opacity-90 rounded-full bg-button text-utama"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default ProductsCard;
