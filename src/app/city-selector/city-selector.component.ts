import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent {
  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  selectedCity: string = '';

  constructor() {
    console.log('CitySelectorComponent loaded');  // Add this log to see when the component is loaded
  }

  onCityChange(event: any) {
    this.selectedCity = event.target.value;
    console.log('Selected city:', this.selectedCity);
  }

}
