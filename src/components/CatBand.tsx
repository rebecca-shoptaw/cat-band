import { useState } from "react";
import InstrumentData from "../data/InstrumentData";

const CatBand = () => {
  const [nowPlaying, setPlaying] = useState("");

  const [bassPlaying, setBassPlaying] = useState(false);
  const [clarinetPlaying, setClarinetPlaying] = useState(false);
  const [drumsPlaying, setDrumsPlaying] = useState(false);
  const [guitarPlaying, setGuitarPlaying] = useState(false);
  const [percussionPlaying, setPercussionPlaying] = useState(false);
  const [pianoPlaying, setPianoPlaying] = useState(false);
  const [saxPlaying, setSaxPlaying] = useState(false);
  const [vibraphonePlaying, setVibraphonePlaying] = useState(false);
  const [vocalsPlaying, setVocalsPlaying] = useState(false);

  const portfolio_link = "https://rebeccashoptaw.dev/";
  const grace_link = "https://www.instagram.com/streh_low/";

  const cats = [
    {
      id: "Q",
      name: "Boots",
      role: "sax",
      arr: InstrumentData.saxArr,
      func: setSaxPlaying,
      state_var: saxPlaying,
    },
    {
      id: "W",
      name: "Ariadne",
      role: "vocals",
      arr: InstrumentData.vocalsArr,
      func: setVocalsPlaying,
      state_var: vocalsPlaying,
    },
    {
      id: "E",
      name: "Spots",
      role: "clarinet",
      arr: InstrumentData.clarinetArr,
      func: setClarinetPlaying,
      state_var: clarinetPlaying,
    },
    {
      id: "A",
      name: "Mr. Toes",
      role: "drums",
      arr: InstrumentData.drumsArr,
      func: setDrumsPlaying,
      state_var: drumsPlaying,
    },
    {
      id: "S",
      name: "Hermes",
      role: "bass",
      arr: InstrumentData.bassArr,
      func: setBassPlaying,
      state_var: bassPlaying,
    },
    {
      id: "D",
      name: "Rexroth",
      role: "guitar",
      arr: InstrumentData.guitarArr,
      func: setGuitarPlaying,
      state_var: guitarPlaying,
    },
    {
      id: "Z",
      name: "Alfie",
      role: "piano",
      arr: InstrumentData.pianoArr,
      func: setPianoPlaying,
      state_var: pianoPlaying,
    },
    {
      id: "X",
      name: "Ravioli",
      role: "percussion",
      arr: InstrumentData.percussionArr,
      func: setPercussionPlaying,
      state_var: percussionPlaying,
    },
    {
      id: "C",
      name: "Mittens",
      role: "vibraphone",
      arr: InstrumentData.vibraphoneArr,
      func: setVibraphonePlaying,
      state_var: vibraphonePlaying,
    },
  ];

  const stopPlaying = () => {
    if (document.readyState == "complete") {
      cats.forEach((cat) => {
        if (cat.state_var) {
          playPause(cat);
        }
      });
    } else window.onload = () => stopPlaying();
  };

  const playPause = (cat: {
    id: string;
    name: string;
    role: string;
    arr: string[];
    func: Function;
    state_var?: boolean;
  }) => {
    const audio = document.getElementById(cat.id) as HTMLAudioElement;
    if (audio) {
      if (audio.paused) {
        audio.src = cat.arr[Math.floor(Math.random() * cat.arr.length)];
        audio.play();
        setPlaying(`${cat.name} on ${cat.role}`);
        cat.func(true);
      } else {
        audio.pause();
        setPlaying("");
        cat.func(false);
      }
    } else window.onload = () => playPause(cat);
  };

  window.onload = () => {
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      document.getElementById(e.key.toUpperCase())?.click();
    });
  };

  return (
    <main>
      <div id="close-btn">
        <a href={portfolio_link}>
          <i className="bi bi-x-lg close-btn" />
        </a>
      </div>
      <div id="cat-band" className="d-flex flex-column">
        <div
          id="drum-machine"
          className="d-flex flex-row flex-wrap mx-auto p-5 justify-content-center"
        >
          <div id="display">
            <p className="text-center">
              <span className="now-playing">NOW PLAYING</span>
              <br />
              {nowPlaying}
            </p>
          </div>
          {cats.map((cat) => (
            <button
              id={`${cat.role}-button`}
              key={cat.id}
              type="button"
              className={`drum-pad ${cat.state_var ? "playing" : "paused"}`}
              onClick={() => playPause(cat)}
            >
              <img
                id={`${cat.role}-cat`}
                className="cat"
                src={`./${cat.role}_cat.jpg`}
              />
              <audio id={cat.id} className="clip" src={cat.arr[0]} loop></audio>
              <p>{cat.id}</p>
            </button>
          ))}
          <button
            id=" "
            type="button"
            className="stop-button"
            onClick={stopPlaying}
          >
            PAUSE
          </button>
        </div>
        <div id="footer">
          <div id="grace-link" className="credits">
            Cats by{" "}
            <a href={grace_link} target="_blank">
              Grace Strehlow
            </a>
          </div>
          <div id="portfolio-link" className="credits">
            Site design & coding by <br></br>
            <a href={portfolio_link} target="_blank">
              Rebecca Shoptaw
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CatBand;
