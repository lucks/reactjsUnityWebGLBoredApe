import logo from './logo.svg';
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";
import BtnGeneral from './components/BtnGeneral/'

const unityContext = new UnityContext({
  loaderUrl: "./Game/Build/test.loader.js",
  dataUrl: "./Game/Build/test.data",
  frameworkUrl: "./Game/Build/test.framework.js",
  codeUrl: "./Game/Build/test.wasm",
});

function App() {
  return (
    <div className="App">
      Hola lucks!!
      <Unity unityContext={unityContext}
      style={{
        width: '50%', height: 500, background: "orange"
      }}
      />

      <BtnGeneral />

    </div>
  );
}

export default App;
