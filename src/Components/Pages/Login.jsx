import Background1 from "../Img/plain-black-colour-58t2wzat7skmp8mk.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setpassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    if (!Username || !Password) {
      setError(true);
      e.preventDefault();
    }
    try {
      // let resposnse = await axios.post("http://192.168.70.186:8000/signup", {
      // Username: Firstname,
      //   Email: EmailId,
      //   Password: Password,
      // });
      // console.log("response", resposnse);
    } catch (error) {
      console.log(error);
    }
    // console.log("Enter Username:", Username, "Enter Password:", Password);
  };
  return (
    <section
      className="text-center py-32 "
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
      <div className="inline-block backdrop-blur-lg text-white py-20 px-28 bg-white/10 rounded-lg ">
        <div className="text-4xl">
          <h1>LOGIN</h1>
        </div>
        <br />
        <div>
          <form>
            <div className="">
              <label>Username:</label>
              <input
                type="text"
                className="text-black"
                name="username"
                placeholder="Enter your Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {error && Username.length <= 0 ? (
              <label className="text-red-500">Username is not valid</label>
            ) : (
              ""
            )}
            <br />
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="text-black"
                placeholder="Enter Your Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            {error && Password.length <= 0 ? (
              <label className="text-red-500">Password is incorrect</label>
            ) : (
              ""
            )}
            <br />
            <Link to={"/app"} onClick={handleSubmit}>
              <div className="border inline-block bg-black text-white rounded-lg px-2 py-2 cursor-pointer">
                <button>Submit</button>
              </div>
            </Link>
          </form>
          <br />
          <div className="flex">
            <h1>If you not register yet?</h1>&nbsp;
            <a href="./" className="text-blue-700">
              Create account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
