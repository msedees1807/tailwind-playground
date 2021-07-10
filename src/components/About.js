function About() {
  return (
    <div className="text-left p-10 flex flex-col-reverse lg:flex-row">
      <img
        className="pl-20 pr-20 pb-20 max-w-lg m-auto"
        src="images/hallway.webp"
        alt="Hallway in Amsterdam (2019)"
      />
      <div className="p-20">
        <h1 className="text-3xl pb-4 font-raleway">How it got started</h1>
        <p className="font-raleway">
          What are you passionate about? For me, it’s HÔWM. I’ve always loved
          creating spaces that feel personal and welcoming, trying to find the
          balance between aesthetic and functionality - from university bedrooms
          to house shares in London. As someone who has moved several times in
          the last few years I know the importance of creating a space that is
          yours. I also know that at times interior design can feel inaccessible
          and expensive. HÔWM tries to bridge that gap, by providing tips and
          ideas I’ve learned along the way to help you create the space you want
          (and deserve). ​ HÔWM is truly my own little passion project - if just
          one idea helps you out then I’m happy! I hope you enjoy browsing my
          site and all of the content I have to offer. Take a look around;
          perhaps you’ll discover a new passion too. Read on and enjoy!
        </p>
      </div>
    </div>
  );
}

export default About;
