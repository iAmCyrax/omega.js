import { element } from "../scripts/utils.js";
import { Title } from "./components/Title.js";

const HTML = () => [
    Title,
    element("button", "Click Me", { style: "background-color: green" })
];

export default HTML;
