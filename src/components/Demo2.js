import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  /**
   * not like => ref =0
   * ref={current: 0}
   *
   */

  console.log("rendering.....");
  const i = useRef(null);
  //   let i = {
  //     current: null,
  //   };
  useEffect(() => {
    if (i.current) return;
    i.current = setInterval(() => {
      //   console.log("JAVASCRIPT", Math.random());
    }, 1000);
    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Incresase x
        </button>
        <span className="font-bold text-xl">let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Incresase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref, "ref");
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-4 m-4 font-bold text-white rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
