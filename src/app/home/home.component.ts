import {
    Component, HostBinding,
    OnInit
} from '@angular/core';

@Component({
    selector: 'main',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    @HostBinding('class.right-panel-visible')isActive: boolean = true;
    ngOnInit(): void {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    }
    onClick(): void {
        this.isActive =! this.isActive;
    }
}
