import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function IndexPage() {
  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideAnimation = useSpring({
    from: { transform: "translateY(50px)" },
    to: { transform: "translateY(0px)" },
    config: { duration: 1000 },
  });

  const rotateAnimation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={fadeAnimation}
      className="flex flex-col items-center justify-center h-screen relative"
    >
      <animated.h1
        style={slideAnimation}
        className="text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Find Your Perfect Roommate!
      </animated.h1>
      <animated.p
        style={slideAnimation}
        className="text-lg text-gray-700 mb-8 text-center"
      >
        Welcome to our roommate finding platform. Start your search today!
      </animated.p>
      <Link
        to="/all"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out"
      >
        Explore Listings
      </Link>
      <animated.div
        style={rotateAnimation}
        className="absolute   right-0 bottom-24 m-4 text-gray-600"
      >
        <span className="text-4xl" role="img" aria-label="Sarcastic Emoji">
          😒
        </span>
      </animated.div>
    </animated.div>
  );
}

export default IndexPage;
