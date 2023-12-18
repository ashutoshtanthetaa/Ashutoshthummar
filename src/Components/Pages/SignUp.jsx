import Background1 from "../Img/plain-black-colour-58t2wzat7skmp8mk.jpg";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";
export default function SignUp() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [EmailId, setEmailId] = useState("");
  const [Password, setnewpassword] = useState("");
  const [ConfirmPassword, setConfirmpassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    if (!Firstname || !EmailId || !Password || !Lastname || !ConfirmPassword) {
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
    <div>
      <section
        className="text-center lg:py-32 "
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
        <div className="inline-block py-10 md:py-20 md:mt-56 mt-28 lg:mt-0 lg:py-4 px-4 md:px-20 lg:px-20 bg-white/10 text-white backdrop-blur-lg rounded-lg ">
          <div className="text-4xl">
            <h1>Create New Account</h1>
          </div>
          <br />
          <div className="">
            <form>
              <div className="flex">
                <label>Firstname: </label>
                <input
                  type="text"
                  name="Firstname"
                  placeholder="Enter Your FirstName"
                  className="text-black"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              {error && Firstname.length <= 0 ? (
                <label className="text-red-500">Firstname is not valid</label>
              ) : (
                ""
              )}
              <br />
              <div className="flex">
                <label>Lastname: </label>
                <input
                  type="text"
                  className="text-black"
                  name="Lastname"
                  placeholder="Enter Your LastName"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              {error && EmailId.length <= 0 ? (
                <label className="text-red-500">Lastname is not valid</label>
              ) : (
                ""
              )}
              <br />
              <div className="flex">
                <label>Email Address:</label>
                <input
                  type="email"
                  className="text-black"
                  name="Email"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => setEmailId(e.target.value)}
                />
                <br />
              </div>
              {error && EmailId.length <= 0 ? (
                <label className="text-red-500">
                  EmailAddress is not valid
                </label>
              ) : (
                ""
              )}
              <br />
              <div className="flex">
                <label>New Password: </label>
                <input
                  type="password"
                  className="text-black"
                  name="Newpassword"
                  placeholder="Enter Your New Password"
                  onChange={(e) => setnewpassword(e.target.value)}
                />
              </div>
              {error && Password.length <= 0 ? (
                <label className="text-red-500">
                  New Password is not valid
                </label>
              ) : (
                ""
              )}
              <br />
              <div className="flex">
                <label>Confirm Password: </label>
                <input
                  type="password"
                  name="password"
                  className="text-black w-56"
                  placeholder="Enter Your Confirm Password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </div>
              {error && ConfirmPassword.length <= 0 ? (
                <label className="text-red-500">
                  Confirm Password does not match
                </label>
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
              <h1>If you already account? </h1>&nbsp;
              <a href="./Login" className="text-blue-700">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
