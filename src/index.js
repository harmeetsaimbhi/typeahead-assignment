import ReactDOM from "react-dom";
import { yogaPoses } from "./constants/data";
import App from "./App";

ReactDOM.render(<App data={yogaPoses} />, document.getElementById("root"));
