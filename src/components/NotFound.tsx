const NotFound = () => {
  return (
    <div className="my-auto flex flex-col items-center sm:grid-cols-1 lg:col-span-2  xl:col-span-3 2xl:col-span-4">
      <div className="text-7xl font-bold text-gray-500">404</div>

      <div className="mt-10 text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
        No characters found
      </div>

      <div className="mt-8 text-sm font-medium text-gray-400 md:text-xl lg:text-2xl">
        Characters with the given filters do not exist
      </div>
    </div>
  );
};
export default NotFound;
