import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-2">
            <Link href="#" className="hover:text-gray-700">
              Help
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Status
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Writers
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Blog
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Careers
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Terms
            </Link>
            <Link href="#" className="hover:text-gray-700">
              About
            </Link>
          </div>
        </div>
  );
};

export default Footer;
