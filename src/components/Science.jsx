import React, { useState } from 'react'
import students from "../../jsons/college-science.json";
import { ShowStudent } from '../ShowStudent';
import { ShowImage } from '../ShowImage';

export default function Science() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div>
      {activeImg && (
        <ShowImage activeImg={activeImg} setActiveImg={setActiveImg} />
      )}
      <div className="container mx-auto mt-16">
        {students.map((student) => (
          <ShowStudent
            key={student.roll}
            student={student}
            setActiveImg={setActiveImg}
          />
        ))}
      </div>
    </div>
  )
}
