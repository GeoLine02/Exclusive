const CardLoader = () => {
  return (
    <div className="flex flex-col gap-4 w-[200px] mt-6">
      <div className="bg-gray-500 animate-pulse w-full h-[250px] rounded-md opacity-90"></div>
      <div className="flex items-center justify-between">
        <div className="bg-gray-500 opacity-90 animate-pulse h-[30px] rounded-md w-1/2"></div>
        <div className="bg-gray-500 opacity-90 animate-pulse h-[30px] rounded-md w-[30%]"></div>
      </div>
    </div>
  );
};

export default CardLoader;
