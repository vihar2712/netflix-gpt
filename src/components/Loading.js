const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-black text-white h-full w-full">
      {/* <h1 className="text-3xl">Loading....</h1> */}
      <div className="rounded-full w-[100px] h-[100px] border-gray-400 border-t-[16px] border-r-red-600 border-[16px] animate-spin "></div>
    </div>
  );
};

export default Loading;
