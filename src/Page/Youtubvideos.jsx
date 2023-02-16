import React from "react";

export const Youtubvideos = () => {
  return (
    <div>
      <div className="bg-white py-5 mt-4 rounded-2xl">
        <iframe
          className="mt-5 mr-2 px-8 "
          src="https://www.youtube.com/embed/vn5gEWH3J5c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
