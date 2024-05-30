import { Component } from '@angular/core';

@Component({
  selector: 'app-outils-et-applications',
  templateUrl: './outils-et-applications.component.html',
  styleUrls: ['./outils-et-applications.component.css']
})
export class OutilsEtApplicationsComponent {
  // Data for Test Success and Availability Chart
  testSuccessAvailabilityChartData = [
    { name: 'Taux de réussite des tests de charge', value: 98 },
    { name: 'Taux de disponibilité', value: 99 }
  ];

  // Data for User Satisfaction Chart
  userSatisfactionChartData = [
    { name: 'Satisfaits', value: 88 },
    { name: 'Non Satisfaits', value: 12 }
  ];

  // Data for Tool Adoption and Usage Chart
  toolAdoptionUsageChartData = [
    { name: 'Taux d\'adoption des nouveaux outils', value: 65 },
    { name: 'Utilisation moyenne des outils existants', value: 80 }
  ];

  // Data for Security Vulnerabilities Chart
  securityVulnerabilitiesChartData = [
    { name: 'Vulnérabilités identifiées', value: 10 },
    { name: 'Vulnérabilités corrigées', value: 8 },
    { name: 'Taux de réussite des audits de sécurité', value: 92 }
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
