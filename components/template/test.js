
const create_template = (name,html) => {
    class MyTemplate extends HTMLElement {
        constructor(){
            super();
            let shadow = this.attachShadow({mode:'open'});
            const template = document.createElement('fragment');
            template.innerHTML = html;
            shadow.appendChild(template.querySelector('template').content.cloneNode(true))
        }
    };
    customElements.define(`orui-template-${name}`, MyTemplate);
    return MyTemplate
};

const html = `
    <template>
        <slot name="xxxx"></slot>
        <slot name="title"></slot>
    </template>
`;

export const test_template = create_template('test',html);

