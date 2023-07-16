import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
        {/* <div className="startcontent1">
            <img src="../Images/background.jpeg" alt="" className="startbg"></img>
        </div> */}
    {/* <div className="startcontent2"> */}
        <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
        </div>
    
    // </div>
  );
}