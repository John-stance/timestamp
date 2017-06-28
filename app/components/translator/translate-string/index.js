/* global document, customElements, BaseElement, Translator */

class TranslateString extends BaseElement {
    constructor() {
        super().fetchTemplate();

        const string = Translator.getString(this.textContent);

        this.setAttribute('key', this.textContent);

        this.innerHTML = string;
        this.originalString = string;
    }
}

// Remember document from import scope. Needed for accessing elements inside
// the imported html…
TranslateString.ownerDocument = document.currentScript.ownerDocument;

// @see https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/define
customElements.define('translate-string', TranslateString);
