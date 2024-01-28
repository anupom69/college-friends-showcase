import { useMemo, useState } from "react";
import { ShowStudent } from "../ShowStudent";
import { ShowImage } from "../ShowImage";

export default function Science({ query, students }) {
  const [activeImg, setActiveImg] = useState(null);
  const filteredSt = useMemo(() => {
    return students.filter((student) => {
      return student.name.toLowerCase().includes(query);
    });
  }, [query, students]);
  return (
    <div>
      {activeImg && (
        <ShowImage activeImg={activeImg} setActiveImg={setActiveImg} />
      )}
      <div className="container mx-auto mt-28 md:mt-16">
        {filteredSt.map((student) => (
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
