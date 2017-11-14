import {
    Component
} from '@angular/core';
import { AccordionService } from '../services/accordion.service';
import { IPipe } from '../shared/models/PanelType';
@Component({
    selector: 'accordion-group',
    styleUrls: ['./accordion-group.component.scss'],
    templateUrl: './accordion-group.component.html'
})

export class AccordionGroupComponent {
    panelTypes: IPipe[];
    title: string;
    selected: any;
    constructor(_accordionService: AccordionService) {
        this.panelTypes = _accordionService.getPanelTypes();
    }
    callAlert(panel) {
        alert(panel);
    }
    isActive(panel): boolean {
        return this.selected === panel;
    }
    select(panel) {
        this.selected = (this.selected === panel ? null : panel);
    }
}
