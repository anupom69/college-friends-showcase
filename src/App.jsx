import React, { useEffect, useReducer, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import sStudents from "../jsons/college-science.json";
import bStudents from "../jsons/college-business.json";
import hStudents from "../jsons/college-humanities.json";

const initialState = {
  students: sStudents,
  activeImage: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "grpScience":
      return { ...state, students: sStudents };
    case "grpHumanities":
      return { ...state, students: hStudents };
    case "grpBusiness":
      return { ...state, students: bStudents };
    case "changeImg":
      return { ...state, activeImage: state.activeImage == null ? action.payload : null };
    case "closeImg":
      return { ...state, activeImage: null };
    default:
      return function () {
        console.error("Unknwon Action triggered.");
        return { ...state };
      };
  }
}

function App() {
  const [{ students, activeImage }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div>
      {activeImage && (
        <ShowImage activeImage={activeImage} dispatch={dispatch} />
      )}
      <ChooseGroup dispatch={dispatch} />
      <div className="container mx-auto">
        {students.map((student) => (
          <ShowStudent
            key={student.roll}
            student={student}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

function ChooseGroup({ dispatch }) {
  const ref = useRef(null);
  useEffect(function () {
    ref.current.focus();
  }, []);
  return (
    <div className="bg-text-100 rounded-lg w-screen pt-5 border-b-2 border-text-600 pb-4 px-2 border-dashed">
      <button
        ref={ref}
        onClick={() => dispatch({ type: "grpScience" })}
        className="sp-button"
      >
        Science
      </button>
      <button
        onClick={() => dispatch({ type: "grpHumanities" })}
        className="sp-button"
      >
        Humanities
      </button>
      <button
        onClick={() => dispatch({ type: "grpBusiness" })}
        className="sp-button"
      >
        Business Studies
      </button>
    </div>
  );
}

function ShowStudent({ student, dispatch }) {
  return (
    <div className="student">
      <div>
        <p className="font-bold">{student.name}</p>
        <p className="text-secondary-600">{student.roll}</p>
        <p className="text-accent-800 font-semibold">{student.group}</p>
      </div>
      <div
        onClick={() => dispatch({type: "changeImg", payload: student.img})}
        className="rounded-lg object-cover w-[100px] h-[100px]"
      >
        <LazyLoadImage
          alt={student.name}
          placeholderSrc={student.img} // use normal <img> attributes as props
          src={`https://ggc.eshiksabd.com/${student.img}`}
          width={"80px"}
          height={"80px"}
        />
      </div>
    </div>
  );
}
// https://ggc.eshiksabd.com/image/student/20231119090629.jpg

function ShowImage({ activeImage, dispatch }) {
  return (
    <div onClick={() => dispatch({type:"changeImg"})} className="big-img">
      <button
        className="text-left sp-button"
        onClick={() => dispatch({type:"changeImg"})}
      >
        ❌
      </button>
      <img
        className="object-contain w-80 mx-auto rounded-2xl"
        src={activeImage}
        onClick={() => dispatch({type:"changeImg"})}
        alt="big-image"
      />
    </div>
  );
}

export default App;
