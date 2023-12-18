import Body from "./Components/Pages/Body";
import Header from "./Components/common/Header";
import Background1 from "./Components/Img/plain-black-colour-58t2wzat7skmp8mk.jpg";
function App() {
  return (
    <div
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
      <Header />
      <Body />
    </div>
  );
}

export default App;
