import { useState } from "react";

const Content = () => {
  const [imageSetIndex, setImageSetIndex] = useState(0);
  const [textSetIndex, setTextSetIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [noImageIndex, setNoImageIndex] = useState(2);

  const imageSets = [
    "./Pookie.png",
    "./happy-cat.mp4",
    "./cat.jpeg",
    "beautiful.jpeg",
  ];
  const textSets = [
    "No",
    "Are you sure?",
    "Think about it",
    "Abeg nauu",
    "Noooo",
    "Don't do this",
    "My heart",
    "Why???",
    "The No is for play",
    "No NOOO!",
  ];

  const onYes = () => {
    setImageSetIndex(1);
    setShowText(true);
    setYesClicked(true);
  };

  const onNo = () => {
    setImageSetIndex(noImageIndex);
    setNoImageIndex(
      (prevIndex) => ((prevIndex + 1) % (imageSets.length - 2)) + 2
    );
    setTextSetIndex((prevIndex) => (prevIndex + 1) % textSets.length);
    setButtonOpacity((prevOpacity) => Math.max(prevOpacity - 0.1, 0));
  };

  return (
    <div className="flex items-center justify-center flex-col font-Cute text-white gap-8 md:gap-10 lg:gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-7xl md:text-9xl">Hey Beautiful!</h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl">
          Will you be my Valentine?
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center w-6/12">
        {imageSetIndex === 1 ? (
          <video
            autoPlay
            loop
            className=""
            src={imageSets[imageSetIndex]}
            alt="Valentine"
          />
        ) : (
          <img className="" src={imageSets[imageSetIndex]} alt="Valentine" />
        )}
        {showText && <p className="text-6xl">Yayyyyyyyyy!!!!!</p>}
      </div>
      <div className="flex items-center gap-12 text-4xl font-normal">
        {!yesClicked && (
          <button
            onClick={onYes}
            className="border-2 bg-sky-400 border-white px-3 rounded-xl text-green-800 font-semibold"
          >
            Yes!
          </button>
        )}
        {!showText && !yesClicked && buttonOpacity > 0 && (
          <button
            onClick={onNo}
            className="border-2 bg-sky-400 border-white px-3 rounded-xl text-red-500 font-semibold"
            style={{ opacity: buttonOpacity }}
          >
            {textSets[textSetIndex]}
          </button>
        )}
      </div>
    </div>
  );
};

export default Content;
