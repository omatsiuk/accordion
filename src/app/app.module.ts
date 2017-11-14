import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
    NgModule,
    ApplicationRef
} from '@angular/core';
import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';
import {AccordionService} from './services/accordion.service';
/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';

import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {UtilityPanelComponent} from './home/utility-panel/utility-panel.component';
import {AccordionGroupComponent} from './accordion-group';
import {AccordionPanelComponent} from './accordion-group/accordion-panel/accordion-panel.component';

import '../styles/styles.scss';
import {CoreModule} from './core/core.module';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        UtilityPanelComponent,
        AccordionGroupComponent,
        AccordionPanelComponent
    ],
    imports: [ // import Angular's modules
        CoreModule,
        HttpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})

        /*UIRouterModule.forRoot(
         {
         states: STATES,
         otherwise: DEFAULT_STATE,
         configClass: MyRootUIRouterConfig,
         useHash: true
         } as RootModule)*/
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        AccordionService
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }
}
