import { Component, OnInit } from '@angular/core';
import { ShortcutService } from '../shortcut.service';
import { Shortcut } from '../shortcut';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})
export class ShortcutsComponent implements OnInit {
  shortcuts: Shortcut[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private shortcutService : ShortcutService) { }

  ngOnInit() {
    this.shortcutService
    .getJson().subscribe(
      p  => this.shortcuts = p,
      e  => this.errorMessage = e,
      () => this.isLoading = false);
  }
}
