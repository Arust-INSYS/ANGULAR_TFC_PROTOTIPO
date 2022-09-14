import { Component } from "@angular/core";

@Component({
    selector: 'header-root',//nombre del componente que será usado en Index.html
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
export class HeaderComponent {
    title = 'TUTORES';
}

