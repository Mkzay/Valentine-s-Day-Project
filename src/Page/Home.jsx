import Content from "../Components/Content";

const Home = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="valentine.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute -top-10 inset-0 flex items-center justify-center">
        <Content />
      </div>
    </div>
  );
};

export default Home;
