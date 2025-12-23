export const Title = () => {
  return (
    <div className="w-full h-9 flex justify-between px-20 mt-13">
      <h2 className="w-28.5 h-8 font-semibold text-2xl">Upcoming</h2>
      <div className="flex w-30 h-9 rounded-md py-2 px-4 gap-2 justify-center items-center">
        <button className="text-sm ">See more</button>
        <img src="./arrow-right.png" alt="arrow-right" className="w-4 h-4" />
      </div>
    </div>
  );
};
