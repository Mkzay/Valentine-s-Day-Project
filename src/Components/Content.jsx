import { useState } from "react";

const Content = () => {
  const [imageSetIndex, setImageSetIndex] = useState(0);
  const [textSetIndex, setTextSetIndex] = useState(0);
  const [buttonStyles, setButtonStyles] = useState({
    yes: { fontSize: "1rem" },
    no: { opacity: 1, fontSize: "4xl" },
  });

  const imageSets = ["./Pookie-P.png", "./Happy.mp4", "./cat.jpeg"];
  const textSets = ["No", "Nooooooo", "Stopppppppppp"];

  const onYes = () => {
    setImageSetIndex(1);
  };

  const onNo = () => {
    setImageSetIndex(2);
    setTextSetIndex((prevIndex) => (prevIndex + 1) % textSets.length);
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      no: {
        ...prevStyles.no,
        opacity: prevStyles.no.opacity - 0.1,
      },
    }));
  };

  return (
    <div className="flex items-center justify-center flex-col font-Cute text-white gap-8 md:gap-10 lg:gap-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl md:text-9xl">Hey Beautiful!</h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl">
          Will you be my Valentine?
        </h2>
      </div>
      <div className="flex items-center justify-center w-6/12">
        {imageSetIndex === 1 ? (
          <video autoPlay loop className="" src={imageSets[imageSetIndex]} alt="Valentine" />
        ) : (
          <img className="" src={imageSets[imageSetIndex]} alt="Valentine" />
        )}
      </div>
      <div className="flex items-center gap-12 text-4xl font-normal">
        <button
          onClick={onYes}
          className="border-2 bg-sky-400 border-white px-3 rounded-xl text-green-500"
        >
          Yes!
        </button>
        <button
          onClick={onNo}
          className="border-2 bg-sky-400 border-white px-3 rounded-xl text-red-500"
          style={buttonStyles.no}
        >
          {textSets[textSetIndex]}
        </button>
      </div>
    </div>
  );
};

export default Content;
