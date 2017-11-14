import {NO_ERRORS_SCHEMA} from '@angular/core';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    ConnectionBackend,
    Http
} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
// Load the implementations that should be tested
import {AppState} from '../core/app.service';
import {TopNavBarComponent} from './top-nav-bar.component';
describe(`Top Nav Bar`, () => {
    let comp: TopNavBarComponent;
    let fixture: ComponentFixture<TopNavBarComponent>;
    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopNavBarComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                BaseRequestOptions,
                MockBackend,
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                AppState
            ]
        })
            .compileComponents(); // compile template and css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopNavBarComponent);
        comp = fixture.componentInstance;

        fixture.detectChanges(); // trigger initial data binding
    });

    it('should exist', () => {
        expect(comp).not.toBeUndefined();
    });
});
