import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Angular 18 and modern UI design.',
      image: 'images/project-image.jpg',
      link: 'https://yourwebsite.com'
    },
    {
      title: 'Todo App',
      description: 'A simple Todo application with Angular and localStorage.',
      image: 'assets/projects/todo.png',
      link: 'https://yourtodoapp.com'
    },
    {
      title: 'E-commerce UI',
      description: 'Responsive e-commerce front-end built with Angular and CSS animations.',
      image: 'assets/projects/ecommerce.png',
      link: 'https://yourecommerce.com'
    }
  ];
}
