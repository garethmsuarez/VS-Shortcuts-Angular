import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { ShortcutService } from './shortcut.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShortcutService]
})
export class AppComponent {

}
