export class Button extends HTMLElement {
    constructor() {
        super();
    }
    init() {
        let shadow = this.attachShadow({ mode: 'closed' });
        let p = document.createElement('p');
        p.innerHTML = this.getAttribute('text') || 'Hello world';
        p.className = 'title';
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "components/button/index.css");
        shadow.appendChild(linkElem);
        shadow.appendChild(p);
    }
    connectedCallback() {
        this.init();
    }
    xxxx() {
        console.log('xxxxxx');
    }
}
customElements.define("orui-button", Button);
