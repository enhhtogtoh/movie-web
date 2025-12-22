type Movie = {
  id: number;
  title: string;
  poster: string;
};
export const Upcoming = () => {
  return (
    <div className="w-full h-150 ">
      <img
        src="./Wicked.jpg"
        alt="wicked"
        className="w-full h-150 object-cover object-center"
      />
    </div>
  );
};
