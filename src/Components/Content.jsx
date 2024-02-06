const Content = () => {
    const onYes = () => {}
  return (
    <div className="flex items-center justify-center flex-col font-Cute text-white gap-8 md:gap-10 lg:gap-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl md:text-9xl">Hey Beautiful!</h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl">
          Will you be my Valentine?
        </h2>
      </div>
      <div className="flex items-center justify-center bg-white w-6/12">
        <img className="" src="./Pookie-P.png" />
      </div>
      <div className="flex items-center gap-16 text-4xl font-normal">
        <button onClick={onYes} className="border-2 bg-sky-400 border-white px-3 rounded-xl text-green-500">
          Yes!
        </button>
        <button className="border-2 bg-sky-400 border-white px-3 rounded-xl text-red-500">
          No..
        </button>
      </div>
    </div>
  );
};

export default Content;
