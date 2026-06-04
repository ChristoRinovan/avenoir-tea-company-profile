type SectionHeaderProps = {
  title: string;
  description: string;
};

function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center py-5 lg:py-10 gap-4 px-10 lg:px-0">
      <h2 className="font-title text-[16px] opacity-80 lg:text-xl font-semibold italic  tracking-widest text-[#b07051]">
        {title}
      </h2>
      <p className="font-desc font-bold text-2xl lg:text-3xl text-utama text-center">
        "{description}"
      </p>
      <div className="flex items-center gap-5">
        <div className="w-20 lg:w-25 h-[2px] bg-orange-300"></div>
        <div
          className="w-2 h-2 rounded-full bg-black
        "
        ></div>
        <div className="w-20 lg:w-25 h-[2px] bg-orange-300"></div>
      </div>
    </div>
  );
}

export default SectionHeader;
