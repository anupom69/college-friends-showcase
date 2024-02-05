// https://ggc.eshiksabd.com/image/student/20231119090629.jpg
export function ShowImage({ activeImg, setActiveImg }) {
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
        src={`https://ggc.eshiksabd.com/${activeImg}`}
        onClick={() => setActiveImg(null)}
        alt="big-image"
      />
    </div>
  );
}
