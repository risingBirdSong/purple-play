import React, { useState, useEffect } from 'react';
import StaticImg from "./components.tsx/staticImage";
import CSS_COLOR_NAMES from "./colors/allColors";
import purples from "./colors/purple";
import { type } from 'os';


const tangentBeauty = require("./images/tangentBeautya.png");
const allColorTangent = require("./images/allColorTangent.png");
const dottedPurpleTangent = require("./images/dottedPurpleTangent.png");
const purpleMarbledStrand = require("./images/purpleMarbledStrand.png");
const singleStrand = require("./images/singleStrand.png");
const wavyStrands = require("./images/wavyStrands.png");
const jewelNecklaces = require("./images/jewelNecklaces.png");
const jewelStreaks = require("./images/jewelStreaks.png");
const bracelet = require("./images/bracelet.png");
const tightlyCoiledRug = require("./images/tightlyCoiledRug.png");
const looselyCoiledRug = require("./images/looselyCoiledRug.png");
const fibby = require("./images/fibby.png");
const fractalTips = require("./images/fractalTips.png");
const fractalFlowerBeauty_a = require("./images/fractalFlowerBeauty_a.png");
const eyeball = require("./images/eyeball.png");
const spokedWheel = require("./images/spokedWheel.png");
const amazingWheel = require("./images/amazingWheel.png");
const classicCar = require("./images/classicCar.png");
const subtleSpiral_a = require("./images/subtleSpiral_a.png");
const _007 = require("./images/_007.png");
const crystalThorns = require("./images/crystalThorns.png");
const littleBird = require("./images/littleBird.png");
const littleBird_a = require("./images/littleBird_a.png");
const logo_a = require("./images/logo_a.png");
const slingShot = require("./images/slingShot.png");
const logoB = require("./images/logoB.png");
const spikyS = require("./images/spikyS.png");
const curves_a = require("./images/curves_a.png");
const wrench = require("./images/wrench.png");
const lungs = require("./images/lungs.png");
const bunnySpoon = require("./images/bunnySpoon.png");
const throwingStar_a = require("./images/throwingStar_a.png");
const pentagram_a = require("./images/pentagram_a.png");
const abstractStar = require("./images/abstractStar.png");
const pentaGram_b = require("./images/pentaGram_b.png");
const nodeStar = require("./images/nodeStar.png");
const nodeStar_b = require("./images/nodeStar_b.png");
const digitalFan = require("./images/digitalFan.png");
const origami = require("./images/origami.png");
const simpleFlower = require("./images/simpleFlower.png");
const paperAirplane = require("./images/paperAirplane.png");
const throwingStar_b = require("./images/throwingStar_b.png");
const simpleLightning = require("./images/simpleLightning.png");
const simpleBowtie = require("./images/simpleBowtie.png");
const simpleHexagon = require("./images/simpleHexagon.png");
const halo = require("./images/halo.png");
const spiralHalo = require("./images/spiralHalo.png");
const spiralHexagon = require("./images/spiralHexagon.png");
const exponentialBoxes = require("./images/exponentialBoxes.png");
const digitalMountains = require("./images/digitalMountains.png");
const targetingSystem = require("./images/targetingSystem.png");
const digitalHourGlass = require("./images/digitalHourGlass.png");
const lightningBolt_b = require("./images/lightningBolt_b.png");
const obsidian = require("./images/obsidian.png");
const robotStarfish = require("./images/robotStarfish.png");
const gnarlyStar = require("./images/gnarlyStar.png");
const trekkie = require("./images/trekkie.png");
const bezierPlay_a = require("./images/bezierPlay_a.png");
const twinkle_a = require("./images/twinkle_a.png");
const skewedBowtie = require("./images/skewedBowtie.png");
const seaShell = require("./images/seaShell.png");
const jaggedCyclone = require("./images/jaggedCyclone.png");
const prettyJewel_a = require("./images/prettyJewel_a.png");
const prettyAnvil = require("./images/prettyAnvil.png");
const slinkieSwirl = require("./images/slinkieSwirl.png");
const tentacle = require("./images/tentacle.png");
const slinkyS = require("./images/slinkyS.png");
const angledTentacle = require("./images/angledTentacle.png");
const strangeBrain = require("./images/strangeBrain.png");
const capsule = require("./images/capsule.png");
const dottedSpiral = require("./images/dottedSpiral.png");
const spider = require("./images/spider.png");
const hypnoticSwirl = require("./images/hypnoticSwirl.png");
const galacticFlower = require("./images/galacticFlower.png");
const cyclone = require("./images/cyclone.png");
const sharp = require("./images/sharp.png");
const razorCyclone = require("./images/razorCyclone.png");
const razorFlower = require("./images/razorFlower.png");
const bowtieSwirl = require("./images/bowtieSwirl.png");
const triangleSwirl_S = require("./images/triangleSwirl_S.png");
const honeyCombSwirl = require("./images/honeyCombSwirl.png");
const scaleSwirlLogo = require("./images/scaleSwirlLogo.png");
const christmasStar = require("./images/christmasStar.png");
const slinkyTunnel = require("./images/slinkyTunnel.png");

// here

let arrOfVars = [
  tangentBeauty,
  allColorTangent,
  dottedPurpleTangent,
  purpleMarbledStrand,
  singleStrand,
  wavyStrands,
  jewelNecklaces,
  jewelStreaks,
  bracelet,
  tightlyCoiledRug,
  looselyCoiledRug,
  fibby,
  fractalTips,
  fractalFlowerBeauty_a,
  eyeball,
  spokedWheel,
  amazingWheel,
  classicCar,
  subtleSpiral_a,
  _007,
  crystalThorns,
  littleBird,
  littleBird_a,
  logo_a,
  slingShot,
  logoB,
  spikyS,
  curves_a,
  wrench,
  lungs,
  bunnySpoon,
  throwingStar_a,
  pentagram_a,
  abstractStar,
  pentaGram_b,
  nodeStar,
  nodeStar_b,
  digitalFan,
  origami,
  simpleFlower,
  paperAirplane,
  throwingStar_b,
  simpleLightning,
  simpleBowtie,
  simpleHexagon,
  halo,
  spiralHalo,
  spiralHexagon,
  exponentialBoxes,
  digitalMountains,
  targetingSystem,
  digitalHourGlass,
  lightningBolt_b,
  obsidian,
  robotStarfish,
  gnarlyStar,
  trekkie,
  bezierPlay_a,
  twinkle_a,
  skewedBowtie,
  seaShell,
  jaggedCyclone,
  prettyJewel_a,
  prettyAnvil,
  slinkieSwirl,
  tentacle,
  slinkyS,
  angledTentacle,
  strangeBrain,
  capsule,
  dottedSpiral,
  spider,
  hypnoticSwirl,
  galacticFlower,
  cyclone,
  sharp,
  razorCyclone,
  razorFlower,
  bowtieSwirl,
  triangleSwirl_S,
  honeyCombSwirl,
  scaleSwirlLogo,
  christmasStar,
  slinkyTunnel,
  //  empty
]


enum choiceEnum {
  tangentBeauty = "tangentBeauty",
  allColorTangent = "allColorTangent",
  dottedPurpleTangent = "dottedPurpleTangent",
  purpleMarbledStrand = "purpleMarbledStrand",
  singleStrand = "singleStrand",
  wavyStrands = "wavyStrands",
  jewelNecklaces = "jewelNecklaces",
  jewelStreaks = "jewelStreaks",
  bracelet = "bracelet",
  tightlyCoiledRug = "tightlyCoiledRug",
  looselyCoiledRug = "looselyCoiledRug",
  fibby = "fibby",
  fractalTips = "fractalTips",
  fractalFlowerBeauty_a = "fractalFlowerBeauty_a",
  eyeball = "eyeball",
  spokedWheel = "spokedWheel",
  amazingWheel = "amazingWheel",
  classicCar = "classicCar",
  subtleSpiral_a = "subtleSpiral_a",
  _007 = "_007",
  crystalThorns = "crystalThorns",
  littleBird = "littleBird",
  littleBird_a = "littleBird_a",
  logo_a = "logo_a",
  slingShot = "slingShot",
  logoB = "logoB",
  spikyS = "spikyS",
  curves_a = "curves_a",
  wrench = "wrench",
  lungs = "lungs",
  bunnySpoon = "bunnySpoon",
  throwingStar_a = "throwingStar_a",
  pentagram_a = "pentagram_a",
  abstractStar = "abstractStar",
  pentaGram_b = "pentaGram_b",
  nodeStar = "nodeStar",
  nodeStar_b = "nodeStar_b",
  digitalFan = "digitalFan",
  origami = "origami",
  simpleFlower = "simpleFlower",
  paperAirplane = "paperAirplane",
  throwingStar_b = "throwingStar_b",
  simpleLightning = "simpleLightning",
  simpleBowtie = "simpleBowtie",
  simpleHexagon = "simpleHexagon",
  halo = "halo",
  spiralHalo = "spiralHalo",
  spiralHexagon = "spiralHexagon",
  exponentialBoxes = "exponentialBoxes",
  digitalMountains = "digitalMountains",
  targetingSystem = "targetingSystem",
  digitalHourGlass = "digitalHourGlass",
  lightningBolt_b = "lightningBolt_b",
  obsidian = "obsidian",
  robotStarfish = "robotStarfish",
  gnarlyStar = "gnarlyStar",
  trekkie = "trekkie",
  bezierPlay_a = "bezierPlay_a",
  twinkle_a = "twinkle_a",
  skewedBowtie = "skewedBowtie",
  seaShell = "seaShell",
  jaggedCyclone = "jaggedCyclone",
  prettyJewel_a = "prettyJewel_a",
  prettyAnvil = "prettyAnvil",
  slinkieSwirl = "slinkieSwirl",
  tentacle = "tentacle",
  slinkyS = "slinkyS",
  angledTentacle = "angledTentacle",
  strangeBrain = "strangeBrain",
  capsule = "capsule",
  dottedSpiral = "dottedSpiral",
  spider = "spider",
  hypnoticSwirl = "hypnoticSwirl",
  galacticFlower = "galacticFlower",
  cyclone = "cyclone",
  sharp = "sharp",
  razorCyclone = "razorCyclone",
  razorFlower = "razorFlower",
  bowtieSwirl = "bowtieSwirl",
  triangleSwirl_S = "triangleSwirl_S",
  honeyCombSwirl = "honeyCombSwirl",
  scaleSwirlLogo = "scaleSwirlLogo",
  christmasStar = "christmasStar",
  slinkyTunnel = "slinkyTunnel",
  empty = "",

  // nummy
}


let lengthTracker = Object.keys(choiceEnum);

let allOptionStrings = lengthTracker.map(x => x);

let topChunkDivider = 20;
let leftChunkDivider = 50;
let rightChunkDivider = 50;

let topOptionStrings = allOptionStrings.filter((str, idx) => idx <= topChunkDivider);
let leftOptionStrings = allOptionStrings.filter((str, idx) => idx > topChunkDivider && idx <= rightChunkDivider);
let rightOptionStrings = allOptionStrings.filter((str, idx) => idx > rightChunkDivider);

interface buttonArgs {
  clsNm: "buttonContainerTop" | "buttonContainerLeft" | "buttonContainerRight";
  buttonArr: string[];
}

function App(this: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState<null | number>(null);
  const [goldenArr, setGoldenArr] = useState(["prettyAnvil"])
  const [currentOption, setCurrentOption] = useState("");

  function nextImage() {
    if (typeof currentImageIndex === "number" && currentImageIndex < arrOfVars.length - 1) {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
    }
    // else if (currentImageIndex && currentImageIndex === arrOfVars.length - 1) {
    //   setCurrentImageIndex(0);
    // }
    else {
      setCurrentImageIndex(0);
    }
  }
  function prevImage() {
    if (typeof currentImageIndex === "number" && currentImageIndex > 0) {
      let prevIdx = currentImageIndex - 1;
      setCurrentImageIndex(prevIdx);
    } else {
      setCurrentImageIndex(arrOfVars.length - 1);
    }
  }

  const simpleHandler = (e: KeyboardEvent) => {
    console.log("e", e)
    if (e.key === "ArrowRight") {
      nextImage();
    }
    if (e.key === "ArrowLeft") {
      prevImage();
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", simpleHandler)
  })
  //fffff find me
  const buttonManufacturer = (args: buttonArgs) => {
    return (
      <div className={args.clsNm}>
        <ul className="buttons">

          {args.buttonArr.map((str, idx) => {
            let idxReference = idx;
            if (args.clsNm === "buttonContainerLeft") {
              idxReference = idx + topChunkDivider + 1;
            }
            else if (args.clsNm === "buttonContainerRight") {
              idxReference = idx + leftChunkDivider + 1;
            }
            //currentOption !== str ? setCurrentOption(str) : setCurrentOption("")
            if (goldenArr.includes(str)) {
              return <button style={{ backgroundColor: "gold" }} onClick={() => {
                setCurrentImageIndex(idxReference);
                let copyOfGold = goldenArr.filter(thing => thing !== str);
                setGoldenArr(copyOfGold);
              }
              }
              >{str}</button>
            }
            else if (!goldenArr.includes(str)) {
              return <button style={{ backgroundColor: purples[idx % purples.length] }} onClick={() => {
                setCurrentImageIndex(idxReference);
                let copyOfGold = [...goldenArr, str];
                setGoldenArr(copyOfGold);
              }
              }>{str}</button>
            }

          })}

          {/* bottom */}
        </ul>
      </div>
    )
  }

  const refactoredSelector = (index: number | null) => {
    if (typeof index === "number") {
      return <StaticImg imglink={arrOfVars[index]} />
    }
    else return <StaticImg />
  }


  return (
    <div className="mainContainer">

      <div className="navvy">
        {/* <ul>
          <button> bigOlButton</button>
        </ul> */}
      </div>



      {buttonManufacturer({ clsNm: "buttonContainerTop", buttonArr: topOptionStrings })}

      <div className="midSection">
        {buttonManufacturer({ clsNm: "buttonContainerLeft", buttonArr: leftOptionStrings })}
        <div className="content">
          {/* {selector(currentOption)} */}
          {refactoredSelector(currentImageIndex)}
          <div className="bottom"> <button onClick={() => {
            nextImage()
          }} className="bigButtons">next</button>
            <button onClick={() => {
              prevImage();
            }} className="bigButtons">prev</button>
            <button onClick={() => {
              setCurrentImageIndex(null);
            }} className="bigButtons">clear</button>
          </div>
          <div className="favesContainer">
            <button onClick={() => { console.log("your faves") }}> faves</button>
          </div>
        </div>
        {buttonManufacturer({ clsNm: "buttonContainerRight", buttonArr: rightOptionStrings })}

      </div>

    </div>
  );
}

export default App;
