import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    @defer(on hover) {
      <div>Defer block</div>
    }
    @loading {
      <div>Loading block</div>
    }
    @placeholder {
      <div>Placeholder block</div>
    }
  `,
  styles: [],
})
export class AppComponent {
  title = 'animations-defer';
}
