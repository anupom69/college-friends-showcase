import { useState, useMemo } from "react";
import students from "../../jsons/college-business.json";
import { ShowStudent } from "../ShowStudent";
import { ShowImage } from "../ShowImage";

export default function Business({ query }) {
  const [activeImg, setActiveImg] = useState(null);
  const filteredSt = useMemo(() => {
    return students.filter((student) => {
      return student.name.toLowerCase().includes(query);
    });
  }, [query]);
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
