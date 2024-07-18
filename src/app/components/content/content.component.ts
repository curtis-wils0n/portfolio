import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './projects/projects.component';
import { BioComponent } from './bio/bio.component';

@Component({
  selector: 'content',
  standalone: true,
  imports: [
    FlexLayoutModule,
    ProjectsComponent,
    BioComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
