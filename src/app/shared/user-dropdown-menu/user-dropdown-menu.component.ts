import {
    Component,
    OnInit,
    ViewChild,
    HostListener,
    ElementRef,
    Renderer2
} from '@angular/core';
//import {AppService} from '@services/app.service';
//import {DateTime} from 'luxon';

@Component({
    selector: 'app-user-dropdown-menu',
    templateUrl: './user-dropdown-menu.component.html',
    styleUrls: ['./user-dropdown-menu.component.scss']
})
export class UserDropdownMenuComponent implements OnInit {

    @HostListener('document:click', ['$event'])
    clickout(event: { target: any; }) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hideDropdownMenu();
        }
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngOnInit(): void {
        
    }

    toggleDropdownMenu() {
        
    }

    showDropdownMenu() {
    }

    hideDropdownMenu() {
    }

    logout() {
        
    }

    formatDate(date: Date) {
        //return DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }
}
