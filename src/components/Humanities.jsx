import { useState, useMemo } from "react";
import students from "../../jsons/college-humanities.json";
import { ShowStudent } from "../ShowStudent";
import { ShowImage } from "../ShowImage";
import { useSearchParams } from "react-router-dom";

export default function Science() {
  const [searchQuery] = useSearchParams()
  const q = searchQuery.get("q")
  const [activeImg, setActiveImg] = useState(null);
  const filteredSt = useMemo(() => {
    return students.filter((student) => {
      return student.name.toLowerCase().includes(!q? "": q);
    });
  }, [q]);
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
