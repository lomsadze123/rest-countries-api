const Skeleton = () => {
  const FeedSkeleton = () => (
    <div className="w-[264px] shadow-custom pb-12 rounded-[5px] animate-wiggle">
      <div className="bg-[#e0dddd] w-[264px] h-[170px]"></div>
      <div className="mt-8 px-4 flex flex-col gap-4">
        <div className="bg-[#e0dddd] w-full h-4"></div>
        <div className="bg-[#e0dddd] w-full h-3"></div>
        <div className="bg-[#e0dddd] w-full h-3"></div>
        <div className="bg-[#e0dddd] w-full h-3"></div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-wrap gap-11 lg:gap-20 justify-center md:px-[78px]">
      {Array.from({ length: 10 }, (_, index) => (
        <FeedSkeleton key={index} />
      ))}
    </div>
  );
};

export default Skeleton;
