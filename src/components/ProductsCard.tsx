import { useState } from "react";
import { productsCard } from "../data/ProductsCard";
import { GrNext, GrPrevious } from "react-icons/gr";

function ProductsCard() {
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * 2; // index = array of object, current page nampilin isi index
  const visibleProduct = productsCard.slice(startIndex, startIndex + 2);
  console.log(currentPage);
  console.log(startIndex);

  const totalPage = Math.ceil(productsCard.length / 2);
  const nextSlide = () => {
    setCurrentPage((currentPage + 1) % totalPage);
  };
  const prevSlide = () => {
    setCurrentPage((currentPage - 1 + totalPage) % totalPage);
  };

  return (
    <div className="container mx-auto flex items-center justify-center ">
      <button
        onClick={prevSlide}
        className="btn w-10 h-10  border-2 p-2 rounded-full bg-[#fac9b1] text-utama"
      >
        <GrPrevious size={25} />
      </button>
      <div
        key={currentPage}
        className="flex w-[700px] gap-5 justify-center my-5 animate-[slideIn_0.8s_ease-in-out]"
      >
        {visibleProduct.map((item) => (
          <div
            key={item.id}
            className="w-55 h-full lg:w-70 lg:h-full flex flex-col items-center gap-2"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-full object-cover rounded-xl shadow-md lg:hover:scale-105 duration-500 transition-all
        "
            />

            <div className="w-full h-30 flex flex-col items-center shadow-md p-5 gap rounded-2xl bg-[#ffece3]">
              <h3 className="font-desc text-xl tracking-wide text-utama text-center">
                {item.title}
              </h3>

              <p className="font-par text-[12px] lg:text-sm text-center text-black/80">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="btn w-10 h-10  border-2 p-2 rounded-full bg-[#fac9b1] text-utama"
      >
        <GrNext size={25} />
      </button>
    </div>
  );
}

export default ProductsCard;
