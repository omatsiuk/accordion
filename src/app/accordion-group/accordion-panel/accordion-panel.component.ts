import {
    Component, Input, Output, EventEmitter
} from '@angular/core';
@Component({
    selector: 'accordion-panel',
    styleUrls: ['./accordion-panel.component.scss'],
    templateUrl: './accordion-panel.component.html'
})
export class AccordionPanelComponent {
    @Input() title: string;
    @Output() onPicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() onPickedButton: EventEmitter<any> = new EventEmitter<any>();
    constructor() {}
    onClick() {
        this.onPicked.emit();
    }
    clickPanel() {
        this.onPickedButton.emit();
    }
}
