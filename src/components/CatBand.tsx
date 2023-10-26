import { useState } from "react";

const bassArr = [
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Bass/Upright/90_C_UprightAcBass01_575.mp3?cb=f28cebbb-c6fe-4b83-ac88-3417f9668524`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Bass/Upright/90_Bm_UprightAcBass01_575.mp3?cb=48b6d0f1-2736-48fa-bba5-9c6f3fa22665`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Bass/Upright/90_Eb_UprightAcBass01_575.mp3?cb=b5908500-c0d1-48bf-8fee-632a6812cb50`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Bass/Upright/90_Dm_UprightAcBass01_575.mp3?cb=aae922e6-5924-4c14-a0cf-120d1492f1ce`,
];

const clarinetArr = [
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Solo+Clarinet/90_G_PartyClarinetSolo_01_528.mp3?cb=6ea57e6d-8ffc-41aa-b057-f19776b797de`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Solo+Clarinet/90_A_ClimbingClarinetSolo_01_528.mp3?cb=3948278b-4317-44c3-8bfc-56a95b76ff92`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Solo+Clarinet/90_A_FunkClarinetSolo_02_528.mp3?cb=db0ab8c8-0b5f-40a0-b5ee-2a1379007d94`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Clarinet+Layers/90_F_TrappedClarinetLayer_02_528.mp3?cb=fd1e55fd-c5ef-41eb-bc90-94208a4c8ddf`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Solo+Clarinet/90_Eb_JiggyClarinetSolo_02_528.mp3?cb=e97da085-6d39-4750-8884-033dfdd3bf44`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Clarinet+Layers/90_A_GroovyClarinetLayer_01_528.mp3?cb=06ebe14e-34f2-4c35-a481-96aba6b7af53`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Solo+Clarinet/90_D_SmokyClarinetSolo_02_528.mp3?cb=7f473784-acec-4672-b8fe-05d5132217a4`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Solo+Clarinet/90_F_AiryClarinetSolo_01_528.mp3?cb=7b969f61-2327-4981-8a75-c2d9a2d4709a`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Clarinet+Layers/90_F_OddClarinetLayer_01_528.mp3?cb=1edc3128-3447-4eb7-a733-27564ec177ca`,
  `https://d7d3471nr939s.cloudfront.net/ClarinetAndFluteColours_Noiiz/MP3/Loops/Clarinet+Layers/90_A_PadClarinetLayer_02_528.mp3?cb=78b6cace-2dce-4e24-9aaa-030f693bcba7`,
];

const drumsArr = [
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Drums/90_BBallAcDrums_01_575.mp3?cb=57d36cad-8bd3-4497-8e52-d58495ff9211`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Drums/90_HitHitAcDrums_01_575.mp3?cb=86cce21d-750b-4493-9ca0-e46c1461cf2c`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Drums/90_JazzAcDrums_01_575.mp3?cb=8cc34662-6149-472f-9e43-7298c685080b`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Drums/90_MiniMallAcDrums_01_575.mp3?cb=49dea174-893d-46d4-a95a-acc698c6dc9b`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Drums/90_ShufflerJazzAcDrums_01_575.mp3?cb=b7dbf817-7b40-4e42-ab66-af21efbdba02`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Drums/90_StickAcDrums_01_575.mp3?cb=a7193f23-385b-4262-871d-e850642358fe`,
];

const guitarArr = [
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_Em_MellowGuitar_03_575.mp3?cb=0a773b5f-b74d-4d60-9cd3-c71d4d2965d9`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_G_MellowGuitar_01_575.mp3?cb=f3c9a13b-f4c0-4611-b92b-40da072130da`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_Bm_MellowGuitar_01_575.mp3?cb=cf0c213b-fcad-48ba-b71c-dd5849c21422`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_Dm_MellowGuitar_02_575.mp3?cb=df0753a1-6c50-473f-afab-b8571ac63d13`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_E_MellowGuitar_01_575.mp3?cb=40d715f8-9e51-4b8b-8764-8f609eacb131`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_D_MellowGuitar_01_575.mp3?cb=b623858f-8cb6-4484-98f3-bb765940c4bd`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_D_MellowGuitar_02_575.mp3?cb=32688741-e22d-41ad-8079-ed9286c8b4a2`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_Em_MellowGuitar_02_575.mp3?cb=5639964e-3c1d-46ec-bd81-d875c3aa5b2a`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_Em_MellowGuitar_01_575.mp3?cb=c909e227-aca3-4f12-8339-c6b589af8dfc`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Guitars/90_Dm_MellowGuitar_01_575.mp3?cb=e7c3e153-07f6-4045-9484-9363257f55a8`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/One+Shots/Guitars/F_GuitarChord_01_575.mp3?cb=a22e5a5a-b032-4fb5-951e-bb1d14e5f120`,
];

const percussionArr = [
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Percussion/89_TamboPercussion_01_575.mp3?cb=1938453e-2c0b-4643-bad0-4f5b6187bf48`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Percussion/90_DoubleShakePercussion_01_575.mp3?cb=fb787cc8-a30d-43a8-90fb-b90635863c8b`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Percussion/90_ShakeRattlePercussion_01_575.mp3?cb=e2abe9da-212e-43d3-8fed-cba187638b11`,
];

const pianoArr = [
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Pianos/90_Em_BarPiano_01_575.mp3?cb=154c0f5a-9273-4ebd-88c2-b20762660f5d`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Pianos/90_Bm_BarPiano_02_575.mp3?cb=59f96ef1-6ee7-45c8-ae37-45209e7eda84`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Pianos/90_Gb_BarPiano_01_575.mp3?cb=27a5f112-51c8-41f7-aced-410dda9e5e04`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Pianos/90_Bbm_BarPiano_01_575.mp3?cb=91f74ad4-a28e-4c07-bab5-5a0fc866b636`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Pianos/90_Db_BarPiano_02_575.mp3?cb=9fc8f8f1-44a9-4304-a226-8d9bff8a79bb`,
];

const saxArr = [
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxWet_SP_74_27.mp3?cb=f8bc4103-1c88-465f-92e2-3df0b45da876`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxDry_SP_74_15.mp3?cb=f0ff9282-0e00-4c74-992a-f02ab5fb0f14`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxWet_SP_74_26.mp3?cb=7539d3f9-2940-4c54-ab51-8b676d227f26`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxDry_SP_74_32.mp3?cb=f75b986c-a6f6-4f12-97b3-babfce970319`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxDry_SP_74_37.mp3?cb=25c6e058-84b9-45ad-857a-232a830be660`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G7_ChordWet_SP_74_01.mp3?cb=c26fa09a-2993-43c6-908c-c3dca0f81fd7`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxDry_SP_74_36.mp3?cb=b0be2fc6-ad65-4c22-97ac-0eb59d7edd96`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxWet_SP_74_37.mp3?cb=3d664c8b-5208-4e08-a536-5dfbda822257`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxWet_SP_74_28.mp3?cb=f6f97296-c051-4432-9eed-5628a7b95279`,
  `https://d7d3471nr939s.cloudfront.net/DeepSax_Noiz_SP/MP3/Loops/88_G_DeepSaxWet_SP_74_33.mp3?cb=c42f9ec2-4cf6-4a69-ae1c-8ae7b700e9c4`,
];

const vibraphoneArr = [
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Vibraphones/90_B_DreamyVibraphone_01_575.mp3?cb=012ffb10-597c-41aa-b02c-2a4efa40af94`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Vibraphones/90_Am_DreamyVibraphone_03_575.mp3?cb=1d54c53f-b4e7-4f5d-b202-956b6d395cfb`,
  `https://d7d3471nr939s.cloudfront.net/BlueNoteSessions_Noiiz/MP3/Loops/Vibraphones/90_Dm_DreamyVibraphone_01_575.mp3?cb=161dd45f-9a41-4fe4-8a3e-c2e5a5d57cf9`,
];

const vocalsArr = [
  `https://cdn.pixabay.com/audio/2022/03/10/audio_ada89cfe9b.mp3`,
  `https://cdn.pixabay.com/audio/2022/03/15/audio_57838159d7.mp3`,
  `https://cdn.pixabay.com/audio/2022/03/15/audio_971b7a6aa9.mp3`,
  `https://cdn.pixabay.com/audio/2022/03/14/audio_b9568ae62f.mp3`,
  `https://cdn.pixabay.com/audio/2022/03/15/audio_5f1dbf528a.mp3`,
];

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

  const portfolio_link = "https://rebecca-shoptaw.github.io/";

  const cats = [
    {
      id: "Q",
      name: "Boots",
      role: "sax",
      arr: saxArr,
      func: setSaxPlaying,
      state_var: saxPlaying,
    },
    {
      id: "W",
      name: "Ariadne",
      role: "vocals",
      arr: vocalsArr,
      func: setVocalsPlaying,
      state_var: vocalsPlaying,
    },
    {
      id: "E",
      name: "Spots",
      role: "clarinet",
      arr: clarinetArr,
      func: setClarinetPlaying,
      state_var: clarinetPlaying,
    },
    {
      id: "A",
      name: "Mr. Toes",
      role: "drums",
      arr: drumsArr,
      func: setDrumsPlaying,
      state_var: drumsPlaying,
    },
    {
      id: "S",
      name: "Hermes",
      role: "bass",
      arr: bassArr,
      func: setBassPlaying,
      state_var: bassPlaying,
    },
    {
      id: "D",
      name: "Rexroth",
      role: "guitar",
      arr: guitarArr,
      func: setGuitarPlaying,
      state_var: guitarPlaying,
    },
    {
      id: "Z",
      name: "Alfie",
      role: "piano",
      arr: pianoArr,
      func: setPianoPlaying,
      state_var: pianoPlaying,
    },
    {
      id: "X",
      name: "Ravioli",
      role: "percussion",
      arr: percussionArr,
      func: setPercussionPlaying,
      state_var: percussionPlaying,
    },
    {
      id: "C",
      name: "Mittens",
      role: "vibraphone",
      arr: vibraphoneArr,
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
    id: any;
    name: any;
    role: any;
    arr: any;
    func: any;
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
    <div
      id="cat-band"
      className="d-flex flex-column m-5 justify-content-center"
    >
      <div id="close-btn">
        <a href={portfolio_link}>
          <i className="bi bi-x-lg close-btn" />
        </a>
      </div>
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
              src={`/${cat.role}_cat.jpg`}
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
          Cats by <br></br>
          <a href={portfolio_link} target="_blank">
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
  );
};

export default CatBand;
