import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
@Component({
  selector: 'app',
  standalone: true,
  imports: [
    FlexLayoutModule,
    RouterOutlet,
    ToolbarComponent,
    ContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
