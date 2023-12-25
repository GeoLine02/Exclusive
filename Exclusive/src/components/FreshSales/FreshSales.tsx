const FreshSales = () => {
  return (
    <section>
      <div className="flex gap-2">
        <span className="h-8 w-4 bg-[#DB4444] rounded-md"></span>
        <p className="text-[#DB4444] font-bold">Today's</p>
      </div>
      <div className="flex gap-3 items-center">
        <h1 className="text-4xl">Flash Sales</h1>
        <div>timer</div>
      </div>
    </section>
  );
};

export default FreshSales;
