import background from "./assets/background.png";
import blackShadow from "./assets/black_shadow.png";
import fog1 from "./assets/fog_1.png";
import fog2 from "./assets/fog_2.png";
import fog3 from "./assets/fog_3.png";
import fog4 from "./assets/fog_4.png";
import fog5 from "./assets/fog_5.png";
import fog6 from "./assets/fog_6.png";
import fog7 from "./assets/fog_7.png";
import mountain1 from "./assets/mountain_1.png";
import mountain10 from "./assets/mountain_10.png";
import mountain2 from "./assets/mountain_2.png";
import mountain3 from "./assets/mountain_3.png";
import mountain4 from "./assets/mountain_4.png";
import mountain5 from "./assets/mountain_5.png";
import mountain6 from "./assets/mountain_6.png";
import mountain7 from "./assets/mountain_7.png";
import mountain8 from "./assets/mountain_8.png";
import mountain9 from "./assets/mountain_9.png";
import sunRays from "./assets/sun_rays.png";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src={background}
        className="absolute left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 scale-150 transform-gpu object-cover"
      />

      <img
        src={fog7}
        className="absolute top-0 hidden h-screen w-screen object-cover"
      />

      <img src={mountain10} className="-absolute top-0 max-h-screen" />

      <img
        src={blackShadow}
        className="absolute top-0 h-screen w-screen object-cover"
      />

      <img
        src={fog6}
        className="absolute top-0 hidden h-screen w-screen object-cover"
      />

      <img src={mountain9} className="-absolute top-0 max-h-screen" />

      <img src={mountain8} className="-absolute top-0 max-h-screen" />

      <img
        src={fog5}
        className="absolute top-0 hidden h-screen w-screen object-cover"
      />

      <img src={mountain7} className="-absolute top-0 max-h-screen" />

      <div className="text-container">
        <h2>China</h2>
        <h1>Zhangjiajie</h1>
      </div>

      <img src={mountain6} className="-absolute top-0 max-h-screen" />

      <img
        src={fog4}
        className="absolute top-0 hidden h-screen w-screen object-cover"
      />

      <img src={mountain5} className="-absolute top-0 max-h-screen" />

      <img
        src={fog3}
        className="absolute top-0 hidden h-screen w-screen object-cover"
      />

      <img src={mountain4} className="-absolute top-0 max-h-screen" />

      <img src={mountain3} className="-absolute top-0 max-h-screen" />

      <img
        src={fog2}
        className="absolute top-0 hidden h-screen w-screen object-cover"
      />

      <img src={mountain2} className="-absolute top-0 max-h-screen" />

      <img src={mountain1} className="-absolute top-0 max-h-screen" />

      <img
        src={sunRays}
        className="absolute top-0 h-screen w-screen object-cover"
      />

      <img
        src={blackShadow}
        className="absolute top-0 h-screen w-screen object-cover"
      />

      <img
        src={fog1}
        className="absolute top-0 hidden h-screen w-screen object-cover"
      />
    </div>
  );
}

export default App;
