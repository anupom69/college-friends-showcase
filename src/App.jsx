import React, { useEffect, useRef, useState } from "react";
import sStudents from "../jsons/college-science.json";
import bStudents from "../jsons/college-business.json";
import hStudents from "../jsons/college-humanities.json";

function App() {
  const [activeGroup, setActiveGroup] = useState("science");
  let students = null;
  if (activeGroup === "science") {
    students = sStudents;
  } else if (activeGroup === "business") {
    students = bStudents;
  } else {
    students = hStudents;
  }
  const [activeImg, setActiveImg] = useState(null);
  return (
    <div>
      {activeImg && (
        <ShowImage activeImg={activeImg} setActiveImg={setActiveImg} />
      )}
      <ChooseGroup activeGroup={activeGroup} setActiveGroup={setActiveGroup} />
      <div className="container mx-auto">
        {students.map((student) => (
          <ShowStudent
            key={student.roll}
            student={student}
            setActiveImg={setActiveImg}
          />
        ))}
      </div>
    </div>
  );
}

function ChooseGroup({ activeGroup, setActiveGroup }) {
  const ref = useRef(null);
  useEffect(function () {
    ref.current.focus();
  }, []);
  return (
    <div className="bg-text-100 rounded-lg w-screen pt-5 border-b-2 border-text-600 pb-4 px-2 border-dashed">
      <button
        ref={ref}
        onClick={() => setActiveGroup("science")}
        className="sp-button"
      >
        Science
      </button>
      <button
        onClick={() => setActiveGroup("humanities")}
        className="sp-button"
      >
        Humanities
      </button>
      <button onClick={() => setActiveGroup("business")} className="sp-button">
        Business Studies
      </button>
    </div>
  );
}

function ShowStudent({ student, setActiveImg }) {
  return (
    <div className="student">
      <div>
        <p className="font-bold">{student.name}</p>
        <p className="text-secondary-600">{student.roll}</p>
        <p className="text-accent-800 font-semibold">{student.group}</p>
      </div>
      <img
        className="rounded-lg w-[100px] h-[100px]"
        onClick={() => setActiveImg(student.img)}
        src={student.img}
        alt={student.name}
      />
    </div>
  );
}

function ShowImage({ activeImg, setActiveImg }) {
  console.log(activeImg); // Changed from activeImg.activeImg to activeImg
  return (
    <div onClick={() => setActiveImg(null)} className="big-img">
      <button
        className="text-left sp-button"
        onClick={() => setActiveImg(null)}
      >
        ❌
      </button>
      <img
        className="object-contain w-80 mx-auto rounded-2xl"
        src={activeImg}
        onClick={() => setActiveImg(null)}
        alt="big-image"
      />
    </div>
  );
}

export default App;
