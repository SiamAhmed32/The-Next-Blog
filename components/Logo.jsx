import Link from "next/link";
import React from "react";

const Logo = () => {
  const logoColor = "#198754"; // The green color you chose

  return (
    <div className="flex items-center">
      <Link href="/">
        <svg
          aria-label="The Next Blog logo"
          height="32"
          viewBox="0 0 240 40"
          xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
          className="h-8 w-auto"
        >
          <title>The Next Blog Logo</title>
          <text
            x="0"
            y="26"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontSize="32"
            fontWeight="500"
            fill={logoColor}
          >
            The Next<tspan fontWeight="700">Blog</tspan>
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
