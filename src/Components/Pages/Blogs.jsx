import BlockchainWallpaper from "../Img/HD-wallpaper-technology-blockchain.jpg"
import Background1 from "../Img/plain-black-colour-58t2wzat7skmp8mk.jpg"
export default function Blogs() {
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

      <div className="text-white text-center text-6xl">
        <h1>Blogs</h1>
      </div>

      <div className="backdrop-blur-lg text-white border rounded-2xl inline-block mt-10 ">
        <img src={BlockchainWallpaper} className="w-[670px] rounded-xl"></img>
        <h1 className="text-3xl">
          What is Blockchain? What is the use of Blockchain?
        </h1>
        <h1>Written By:-Ashutosh Thummar</h1>
        <h1>Date:11-Dec-2023</h1>
        <p>➡️</p>
      </div>
    </section>
  );
}
