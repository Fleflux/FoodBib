"use strict";

import stylesheet from "./overview.css";
import overview from "./overview.html";

class Overview {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = overview.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#overview").cloneNode(true);

        let h2_text = section.querySelector("h2");
        let result = h2_text.innerHTML.replace("$$NAME$$", "Rolf");
        h2_text.innerHTML = result;

        let content = {
            className: "overview",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Übersicht";
    }
}

export default Overview;
