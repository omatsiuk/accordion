import {Injectable} from '@angular/core';
import { PANELTYPES, IPipe } from '../shared/models/PanelType';

@Injectable()
export class AccordionService {
    getPanelTypes(): IPipe[] {
       return PANELTYPES;
    }
}
