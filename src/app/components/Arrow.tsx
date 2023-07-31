import Image from "next/image";
import "./Arrow.css";

export default function Arrow() {
  return (
    <div className="downArrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        width={40}
        height={40}
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </svg>
    </div>
  );
}