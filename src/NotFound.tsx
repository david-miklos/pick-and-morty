const NotFound = () => {
  return (
    <div className="flex flex-col items-center col-span-2 my-auto">
      <div className="text-gray-500 font-bold text-7xl">404</div>

      <div className="font-bold text-lg xl:text-3xl lg:text-2xl md:text-xl mt-10">
        No characters found
      </div>

      <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
        Characters with the given filters do not exist
      </div>
    </div>
  );
};
export default NotFound;
