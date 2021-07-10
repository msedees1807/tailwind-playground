function Hero() {
  return (
    <div>
      <div
        className="bg-fixed w-full h-80"
        style={{
          backgroundImage: `url("http://localhost:3000/images/vancouver.png")`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="p-20">
        <h2 className="text-5xl pb-4 font-raleway">Welcome Hôwm</h2>
        <h3 className="text-center">Hôwm is where the start is.</h3>
      </div>
    </div>
  );
}

export default Hero;
