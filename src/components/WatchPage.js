import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useLocation, useSearchParams } from "react-router-dom";
// import CommonContainer from "./CommonContainer";
// import { COMMENT_API } from "../utils/constant";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location);
  const video = location?.state;
  console.log(video, "video++++++++++++++++++++++++++++++++++++");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // const getComments = async () => {
  //   const data = await fetch(COMMENT_API);
  //   const json = await data.json();
  //   console.log(json);
  //   // setSuggestions(json[1]);

  //   // update cache
  // };

  // useEffect(() => {
  //   getComments();
  // }, []);

  return (
    <>
      <div className="flex flex-col ">
        <div className="px-5 shadow-lg flex w-full">
          <div>
            <iframe
              width="1200"
              height="600"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="pt-3">
              {video && (
                <div className="pt-25">
                  <h2 className="font-bold text-xl">{video?.snippet?.title}</h2>
                  <p className="text-gray-600">{video.snippet?.channelTitle}</p>
                  <div className="flex my-2">
                    <div className="pe-2 font-bold">
                      <p>{video.statistics?.viewCount} views</p>
                    </div>
                    <div className="pe-2 font-bold">
                      <p>{video.statistics?.likeCount} Likes</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Comments videoId={video?.id} />
      </div>
      <div className="w-full">
        <LiveChat />
      </div>
    </>
  );
};

export default WatchPage;
{
  /* <CommonContainer /> */
}
