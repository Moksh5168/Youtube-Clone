import React, { useEffect, useState } from "react";
import { COMMENT_API, GOOGLE_API_KEY } from "../utils/constant";

const Comments = ({ videoId }) => {
  const [commentData, setCommentData] = useState([]);
  console.log(commentData, "commentDta");

  const getComments = async () => {
    // const data = await fetch(COMMENT_API);
    const data = await fetch(`${COMMENT_API}${videoId}&key=${GOOGLE_API_KEY}`);

    const json = await data.json();
    console.log(json);
    setCommentData(json.items);

    // update cache
  };

  useEffect(() => {
    getComments();
  }, [videoId]);
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <div className="pl-5 border border-l-black ml-5">
        {commentData?.map((comment, index) => {
          const text = comment.snippet.topLevelComment.snippet.textOriginal;
          return (
            <div
              key={index}
              className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 text-wrap"
            >
              <img
                className="w-4 h-5"
                alt="user"
                src="https://static.thenounproject.com/png/961-200.png"
              />
              <div className="px-3">
                <p className="font-bold">{text}</p>
              </div>
            </div>
          );
        })}

        {/* {commentData?.map((comment, index) => {
          return (
            <div
              key={index}
              className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2"
            >
              <img
                className="w-4 h-5"
                alt="user"
                src="https://static.thenounproject.com/png/961-200.png"
              />
              <div className="px-3">
                <p className="font-bold">
                  {
                    comment.items[0].snippet.topLevelComment.snippet
                      .textOriginal
                  }
                </p>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Comments;
