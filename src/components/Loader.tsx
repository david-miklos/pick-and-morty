const Loader = () => {
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center bg-gray-100 p-5">
      <div className="flex animate-pulse space-x-2">
        <div className="h-3 w-3 rounded-full bg-gray-600"></div>
        <div className="h-3 w-3 rounded-full bg-gray-600"></div>
        <div className="h-3 w-3 rounded-full bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Loader;
