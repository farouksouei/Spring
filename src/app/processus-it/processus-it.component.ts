import { Component } from '@angular/core';

@Component({
  selector: 'app-processus-it',
  templateUrl: './processus-it.component.html',
  styleUrls: ['./processus-it.component.css']
})
export class ProcessusItComponent {
  // Data for Budget Chart
  budgetChartData = [
    { name: 'Budget estimé', value: 45600 },
    { name: 'Budget Annuel', value: 50000 }
  ];

  // Data for User Satisfaction Chart
  userSatisfactionChartData = [
    { name: 'Satisfaits', value: 90 },
    { name: 'Non Satisfaits', value: 10 }
  ];

  // Data for Project Status Chart
  projectStatusChartData = [
    { name: 'Projets Livrés', value: 80 },
    { name: 'Projets Non Livrés', value: 20 },
    { name: 'Projets en cours', value: 15 }
  ];

  // Data for Stakeholder Satisfaction Chart
  stakeholderSatisfactionChartData = [
    { name: 'Satisfaits', value: 85 },
    { name: 'Insatisfaits', value: 15 }
  ];

  // Data for Incident Frequency Chart
  incidentFrequencyChartData = [
    { name: 'Incidents Mineurs', value: 50 },
    { name: 'Incidents Majeurs', value: 5 }
  ];

  // Data for Estimation Chart
  estimationChartData = [
    { name: 'Dépassement planning', value: 15 },
    { name: 'Dépassement en charge', value: 0 }
  ];

  // Chart settings
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'KPI';
  showYAxisLabel = true;
  yAxisLabel = 'Mesure';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
