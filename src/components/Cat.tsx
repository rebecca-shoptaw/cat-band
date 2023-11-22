import { CatCompProps } from "../types/Types";

const Cat: React.FC<CatCompProps> = ({cat, playing, handleClick}) => {
    const audio = document.getElementById(cat.id) as HTMLAudioElement;
    if (audio) {
      if (audio.paused && playing) {
        audio.src = cat.arr[Math.floor(Math.random() * cat.arr.length)];
        audio.play();
      } else if (!audio.paused && !playing) {
        audio.pause();
      }
    }

  return (
    <button
      id={`${cat.role}-button`}
      key={cat.id}
      type="button"
      className={`drum-pad ${playing ? "playing" : "paused"}`}
      onClick={handleClick}
    >
      <img
        id={`${cat.role}-cat`}
        className="cat"
        src={`./${cat.role}_cat.jpg`}
      />
      <audio id={cat.id} className="clip" src={cat.arr[0]} loop></audio>
      <p>{cat.id}</p>
    </button>
  );
};

export default Cat;
