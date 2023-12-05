import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-sort-criteria',
  standalone: true,
  imports: [CommonModule, FormsModule, MatRadioModule],
  templateUrl: './sort-criteria.component.html',
  styleUrl: './sort-criteria.component.css',
})
export class SortCriteriaComponent {
  sort() {}
}
