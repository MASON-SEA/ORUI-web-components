export class Input extends HTMLElement {
    constructor() {
        super();
        this.type = this.getAttribute('type') || 'text';
    }
    connectedCallback() {
        this.init();
        this.bind_events();
    }
    init() {
        let shadow = this.attachShadow({ mode: 'closed' });
        const input = document.createElement('input');
        this.input = input;
        let type = this.type;
        type && input.setAttribute('type', type);
        shadow.appendChild(input);
    }
    bind_events() {
        this.input.onchange = () => {
            const event = new CustomEvent('change_data', {
                detail: {
                    test: this.input.value
                }
            });
            this.dispatchEvent(event);
        };
    }
    test() {
        console.log('test');
    }
}
customElements.define("orui-input", Input);
