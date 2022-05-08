import { logSuccess, logError } from "./logs.js";

/* export */ const app = document.getElementById("app");

/**
 * @param {Function | Array} html
 */
export const setHtml = (html) => {
    const set = (el) => {
        if (typeof el === "function") return (app.innerHTML += el());
        app.innerHTML += el;
    };

    if (typeof html === "function") html().forEach(set);
    else html.forEach(set);

    logSuccess("Initialized HTML.");
};

/**
 * @param {string} tagName
 * @param {string} html
 * @param {object} attributes
 */
export const element = (tagName, html, attributes = {}) => {
    let attrArr = [];
    for (const attr of Object.keys(attributes)) {
        if (Object.keys(attributes).length !== 0)
        attrArr.push(`${attr}="${attributes[attr]}"`);
        else return;
    }
    const finished = `<${tagName} ${attrArr.join(" ")}>${html}</${tagName}>`;
    return finished;
};
