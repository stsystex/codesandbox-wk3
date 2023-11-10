import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage.jsx";

const App = () => {
  // console.log("first");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickUp = () => {
    setNum(num + 1);
  };
  const onClickFace = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    /* eslint react-hooks/exhaustive-deps: off */
  }, [num, faceShowFlg]);

  return (
    <>
      <h1 style={{ color: "blue" }}>Hello!</h1>
      <ColorfulMessage color="blue">TEST</ColorfulMessage>
      <ColorfulMessage color="blue">title2</ColorfulMessage>
      <button onClick={onClickUp}>カウントアップ</button>
      <br />
      <br />
      <button onClick={onClickFace}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>!(^^)!</p>}
    </>
  );
};

export default App;
