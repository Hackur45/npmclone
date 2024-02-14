import "./App.css";

import NavScrollExample from "./components/Navbar";
import Navbarup from "./components/NavbarUp";
import MainPagecontent from "./components/MainPagecontent";

function App() {
  return (
    <>
      <div className="nav-ext">
        <div className="nav-up">
          <Navbarup />
        </div>
        <div>
          <NavScrollExample style={{ marginTop: "20px" }} />
        </div>
        <MainPagecontent/>
      </div>
    </>
  );
}

// class App extends Component {
//   render() {
//       const myStyle = {
//           backgroundImage: "url(/npmbg.jpeg)",
//           height: "100vh",
//           marginTop: "-70px",
//           fontSize: "50px",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//       };
//       return (
//           <div style={myStyle}>
//               <h1>GeeksForGeeks</h1>
//           </div>
//       );
//   }
// }

export default App;
