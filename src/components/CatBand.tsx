import { useState } from "react";
import INSTRUMENT_DATA from "../data/InstrumentData";
import links from '../data/Links';
import CatProps from '../types/Types';

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

  const cats = [
    {
      id: "Q",
      name: "Boots",
      role: "sax",
      arr: INSTRUMENT_DATA.SAX_ARR,
      func: setSaxPlaying,
      state_var: saxPlaying,
    },
    {
      id: "W",
      name: "Ariadne",
      role: "vocals",
      arr: INSTRUMENT_DATA.VOCALS_ARR,
      func: setVocalsPlaying,
      state_var: vocalsPlaying,
    },
    {
      id: "E",
      name: "Spots",
      role: "clarinet",
      arr: INSTRUMENT_DATA.CLARINET_ARR,
      func: setClarinetPlaying,
      state_var: clarinetPlaying,
    },
    {
      id: "A",
      name: "Mr. Toes",
      role: "drums",
      arr: INSTRUMENT_DATA.DRUMS_ARR,
      func: setDrumsPlaying,
      state_var: drumsPlaying,
    },
    {
      id: "S",
      name: "Hermes",
      role: "bass",
      arr: INSTRUMENT_DATA.BASS_ARR,
      func: setBassPlaying,
      state_var: bassPlaying,
    },
    {
      id: "D",
      name: "Rexroth",
      role: "guitar",
      arr: INSTRUMENT_DATA.GUITAR_ARR,
      func: setGuitarPlaying,
      state_var: guitarPlaying,
    },
    {
      id: "Z",
      name: "Alfie",
      role: "piano",
      arr: INSTRUMENT_DATA.PIANO_ARR,
      func: setPianoPlaying,
      state_var: pianoPlaying,
    },
    {
      id: "X",
      name: "Ravioli",
      role: "percussion",
      arr: INSTRUMENT_DATA.PERCUSSION_ARR,
      func: setPercussionPlaying,
      state_var: percussionPlaying,
    },
    {
      id: "C",
      name: "Mittens",
      role: "vibraphone",
      arr: INSTRUMENT_DATA.VIBRAPHONE_ARR,
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

  const playPause = (cat:CatProps) => {
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
        <a href={links.PORTFOLIO_LINK}>
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
            <a href={links.GRACE_LINK} target="_blank">
              Grace Strehlow
            </a>
          </div>
          <div id="portfolio-link" className="credits">
            Site design & coding by <br></br>
            <a href={links.PORTFOLIO_LINK} target="_blank">
              Rebecca Shoptaw
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CatBand;
