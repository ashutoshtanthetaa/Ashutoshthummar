import Background1 from "../Img/plain-black-colour-58t2wzat7skmp8mk.jpg";
export default function Nft() {
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
    ></section>
  );
}
