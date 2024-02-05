import React from "react";

export function ShowStudent({ student, setActiveImg }) {
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
        src={`https://ggc.eshiksabd.com/${student.img}`}
        alt={student.name}
      />
    </div>
  );
}
