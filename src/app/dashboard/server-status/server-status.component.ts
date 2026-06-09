import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      this.currentStatus =
        rnd < 0.5 ? 'online' : rnd < 0.9 ? 'offline' : 'unknown';
    }, 5000);
  }
}
