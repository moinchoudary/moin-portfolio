import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})

export class SkillComponent {

  
  skills = [
    { name: 'Angular', level: 75 },
    { name: 'HTML & CSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Node.js', level: 65 }
  ]
}
