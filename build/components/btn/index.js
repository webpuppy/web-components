var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import btnCss from './btn.css';
import { customElement, LitElement, Enums, html, property, classMap, when, } from '../../globals/exports';
let MyBtn = class MyBtn extends LitElement {
    constructor() {
        super(...arguments);
        this.use_icon = false;
        this.type = 'base';
        this.text = '';
    }
    get_icon() {
        switch (this.type) {
            case 'confirm':
                return '✓';
            case 'danger':
                return 'x';
            default:
                return '';
        }
    }
    render() {
        const classes = {
            primary: this.type === 'primary',
            base: this.type === 'base',
            danger: this.type === 'danger',
            confirm: this.type === 'confirm',
        };
        return html `
			<button class=${classMap(classes)} part="button">
				${this.text}
				${when(!this.use_icon, () => null, () => this.get_icon())}
			</button>
		`;
    }
};
MyBtn.styles = [btnCss];
__decorate([
    property({ attribute: true, type: Boolean })
], MyBtn.prototype, "use_icon", void 0);
__decorate([
    property({ attribute: true })
], MyBtn.prototype, "type", void 0);
__decorate([
    property({ attribute: true })
], MyBtn.prototype, "text", void 0);
MyBtn = __decorate([
    customElement(Enums.default.COMPONENT_PREFIX + 'btn')
], MyBtn);
export { MyBtn };
