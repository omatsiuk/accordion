import {
    Component
} from '@angular/core';
import { AccordionService } from '../services/accordion.service';
import { IPipe } from '../shared/models/PanelType';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'accordion-group',
    styleUrls: ['./accordion-group.component.scss'],
    templateUrl: './accordion-group.component.html'
})

export class AccordionGroupComponent {
    panelTypes: Observable<IPipe[]>;
    title: string;
    selected: string;
    constructor(_accordionService: AccordionService) {
        this.panelTypes = _accordionService.getPanels();
    }
    callAlert(panel: string): void {
        alert(panel);
    }
    isActive(panel: string): boolean {
        return this.selected === panel;
    }
    select(panel: string): void {
        this.selected = (this.selected === panel ? null : panel);
    }
}
