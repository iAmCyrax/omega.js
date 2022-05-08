/**
 * @param  {...string} styleFiles
 */
export const loadStyles = (...styleFiles) => {
    styleFiles.forEach((file) => {
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = file.startsWith("https://") ? file : `../src/${file}`;
        document.head.appendChild(css);
    });
};

/**
 * @param  {...string} scriptFiles
 */
export const loadScripts = (...scriptFiles) => {
    scriptFiles.forEach((file) => {
        const script = document.createElement("script");
        script.src = file.startsWith("https://") ? file : `../src/${file}`;
        document.head.appendChild(script);
    });
};
