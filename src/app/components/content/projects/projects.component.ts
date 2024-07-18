import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import projectsImport from '../../../../assets/projects/projects.json';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    MatGridTile,
    CommonModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public projects: Project[];
  constructor() {
    this.projects = projectsImport.projects
  }
}
