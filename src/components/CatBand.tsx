import { useState } from "react";
import Cat from "./Cat";

import { cats } from "../data/InstrumentData";
import links from "../data/Links";
import { CatProps, LineupProps } from "../types/Types";

const CatBand = () => {
  const [nowPlaying, setPlaying] = useState("");
  const [lineup, setLineUp] = useState<LineupProps>({
    bass: false,
    clarinet: false,
    drums: false,
    guitar: false,
    percussion: false,
    piano: false,
    sax: false,
    vocals: false,
    vibraphone: false,
  });

  const stopPlaying = () => {
      cats.forEach((cat) => {
        if (lineup[cat.role]) {
          playPause(cat);
        }
      });
  };

  const playPause = (cat: CatProps) => {
    if (document.readyState == 'complete') {
      let newLineUp = lineup;
      if (!lineup[cat.role]) {
        setPlaying(`${cat.name} on ${cat.role}`);
        newLineUp[cat.role] = true;
        setLineUp(newLineUp);
      } else {
        newLineUp[cat.role] = false;
        setPlaying("");
        setLineUp(newLineUp);
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
            <Cat
              cat={cat}
              playing={lineup[cat.role] ? true : false}
              handleClick={() => playPause(cat)}
            />
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
