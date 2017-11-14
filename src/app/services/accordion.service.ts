import {Injectable} from '@angular/core';
import { PANELTYPES } from '../shared/models/PanelType';
import { of }         from 'rxjs/observable/of';

@Injectable()
export class AccordionService {
    getPanels() {
        return of(PANELTYPES);
    }
}
