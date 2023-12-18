import Dynasty from "../Audio/MIIA - Dynasty (Lyrics) [TubeRipper.com].mp3";
import TaylorSwift from "../Audio/Mashup Midnight Rain X Daylight Taylor Swift [TubeRipper.com].mp3";
import Background1 from "../Img/plain-black-colour-58t2wzat7skmp8mk.jpg";
import TaylorSwiftimg from "../Img/images.jpeg";
import Peopleyouknowxstarboy from "../Audio/People You Know x Starboy (TikTok Mashup) [TubeRipper.com].mp3"
import Peopleyouknowxstarboyimg from "../Img/ab67616d0000b2733adfdd2f2101c631ab226047.jpeg"
import Dynastyimg from "../Img/size_l.jpg";
export default function Music() {
  return (
    <section
      style={{
        backgroundImage: `url(${Background1})`,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <div className="grid grid-cols-4 mt-20 gap-10 text-white">
        <div className=" inline-block rounded-xl border backdrop-blur-lg bg-white/20">
          <img
            src={Dynastyimg}
            className="w-[315px] object-cover rounded-[50%]"
          ></img>
          <h1 className="text-3xl">Dynasty</h1>
          <audio id="player" controls className="mt-10">
            <source src={Dynasty}></source>
          </audio>
        </div>

        <div className=" inline-block  rounded-xl border backdrop-blur-lg bg-white/20">
          <img src={TaylorSwiftimg} className="w-[315px] rounded-[50%]"></img>
          <h1 className="text-3xl">Midnight-rain x Daylight</h1>
          <audio id="player" controls className="mt-10">
            <source src={TaylorSwift}></source>
          </audio>
        </div>

        <div className=" inline-block  rounded-xl border backdrop-blur-lg bg-white/20">
          <img src={Peopleyouknowxstarboyimg} className="w-[315px] rounded-[50%]"></img>
          <h1 className="text-3xl">People You Know X Starboy</h1>
          <audio id="player" controls className="mt-4">
            <source src={Peopleyouknowxstarboy}></source>
          </audio>
        </div>
      </div>
    </section>
  );
}
