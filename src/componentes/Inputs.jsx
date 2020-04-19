import React from "react";

const Inputs = (props) => {
  const claseInputs = "my-2 text-center py-1 " + props.clase;
  return (
    <div >
      <input type="text" className={claseInputs} value={props.titulo} />
      <button
        className={claseInputs}
        style={{
          fontSize: "18px",
          marginLeft: "2px",
          background: "red",
          color: "black",
          border: "none",
          padding: "5px 12px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={() => props.delete(props.id)}
      >
        x
      </button>
    </div>
  );
};

export default Inputs;
