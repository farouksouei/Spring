import { Injectable } from '@angular/core';
import { KpiData } from './kpi-data.model';

@Injectable({
  providedIn: 'root'
})
export class KpiDataService {
  private kpiData: KpiData[] = [
    { axes: 'Organisation et staffing', sousAxes: 'Structure Organisationnelle et Départementale', kpi: 'Taux d\'occupation par semaine', mesure: 85, unite: '%' },
    { axes: 'Organisation et staffing', sousAxes: 'Rôles et Responsabilités', kpi: 'Taux d\'occupation par heures', mesure: 70, unite: '%' },
    { axes: 'Organisation et staffing', sousAxes: 'Compétences et Qualifications Requises', kpi: 'TNR', mesure: 95, unite: '%' },
    { axes: 'Organisation et staffing', sousAxes: 'Compétences et Qualifications Requises', kpi: 'Nbre total des ressources', mesure: 120, unite: 'N' },
    { axes: 'Organisation et staffing', sousAxes: 'Compétences et Qualifications Requises', kpi: 'Nombre de compétences clés', mesure: 45, unite: 'N' },
    { axes: 'Processus IT', sousAxes: 'Gestion de la Demande', kpi: 'Nombre de Demandes Traitées', mesure: 350, unite: 'N' },
    { axes: 'Processus IT', sousAxes: 'Gestion de la Demande', kpi: 'Temps de Réponse Moyen', mesure: 4, unite: 'heure' },
    { axes: 'Processus IT', sousAxes: 'Gestion de la Demande', kpi: 'Budget estimé', mesure: 45600, unite: 'TND' },
    { axes: 'Processus IT', sousAxes: 'Gestion de la Demande', kpi: 'Charge estimée', mesure: 50, unite: 'j.H' },
    { axes: 'Processus IT', sousAxes: 'Gestion de la Demande', kpi: 'Taux de Satisfaction des Utilisateurs', mesure: 90, unite: '%' },
    { axes: 'Processus IT', sousAxes: 'Gestion du portefeuil Projets', kpi: 'Budget Annuel', mesure: 50000, unite: 'TND' },
    { axes: 'Processus IT', sousAxes: 'Gestion du portefeuil Projets', kpi: 'Pourcentage des projets livrés', mesure: 80, unite: '%' },
    { axes: 'Processus IT', sousAxes: 'Gestion du portfeuil Projets', kpi: 'ROI du portfeuil', mesure: 20, unite: '%' },
    { axes: 'Processus IT', sousAxes: 'Gestion du portfeuil Projets', kpi: 'Taux de Satisfaction des parties prenantes', mesure: 85, unite: '%' },
    { axes: 'Processus IT', sousAxes: 'Gestion du portfeuil Projets', kpi: 'Nombre de projet en cours', mesure: 15, unite: 'N' },
    { axes: 'Processus IT', sousAxes: 'Gestion des Incidents', kpi: 'Nombre d\'Incidents Signalés', mesure: 25, unite: 'N' },
    { axes: 'Processus IT', sousAxes: 'Gestion des Incidents', kpi: 'Temps de Résolution Moyen', mesure: 3, unite: 'heure' },
    { axes: 'Processus IT', sousAxes: 'Gestion des Incidents', kpi: 'Fréquence des incidents mineurs par mois', mesure: 50, unite: 'N' },
    { axes: 'Processus IT', sousAxes: 'Gestion des Incidents', kpi: 'Fréquence des incidents majeurs par mois', mesure: 5, unite: 'N' },
    { axes: 'Processus IT', sousAxes: 'Gestion des projets', kpi: 'Nombre de jalons validés', mesure: 2, unite: 'N' },
    { axes: 'Processus IT', sousAxes: 'Gestion des projets', kpi: 'Niveau de satisfaction métier', mesure: 73, unite: '%' },
    { axes: 'Processus IT', sousAxes: 'Gestion des projets', kpi: 'Estimation de dépassement planning', mesure: 15, unite: 'j' },
    { axes: 'Processus IT', sousAxes: 'Gestion des projets', kpi: 'Estimation de dépassement en charge', mesure: 0, unite: 'j/h' },
    { axes: 'Processus IT', sousAxes: 'Gestion des projets', kpi: 'Estimation de dépassement budgétaire', mesure: 0, unite: 'TND' },
    { axes: 'Budget et Performance Financière', sousAxes: 'Allocation Budgétaire pour les Opérations IT', kpi: 'Budget alloué', mesure: 20000, unite: 'TND' },
    { axes: 'Budget et Performance Financière', sousAxes: 'Allocation Budgétaire pour les Opérations IT', kpi: 'Taux d\'utilisation du budget alloué', mesure: 75, unite: '%' },
    { axes: 'Budget et Performance Financière', sousAxes: 'Analyse de la Rentabilité des Investissements IT', kpi: 'Retour sur investissement', mesure: 25, unite: '%' },
    { axes: 'Budget et Performance Financière', sousAxes: 'Évaluation de la Performance Financière par Rapport aux Objectifs', kpi: 'Indice de performance financière', mesure: 1.2, unite: 'N' },
    { axes: 'Outils et applications', sousAxes: 'Disponibilité des Applications', kpi: 'Temps de réponse', mesure: 200, unite: 'S' },
    { axes: 'Outils et applications', sousAxes: 'Disponibilité des Applications', kpi: 'Taux de réussite des tests de charge', mesure: 98, unite: '%' },
    { axes: 'Outils et applications', sousAxes: 'Disponibilité des Applications', kpi: 'Taux de disponibilité', mesure: 99, unite: '%' },
    { axes: 'Outils et applications', sousAxes: 'Performance des Applications', kpi: 'Temps de réponse moyen des applications', mesure: 250, unite: 'S' },
    { axes: 'Outils et applications', sousAxes: 'Satisfaction des Utilisateurs', kpi: 'Taux de satisfaction des utilisateurs par rapport aux applications', mesure: 88, unite: '%' },
    { axes: 'Outils et applications', sousAxes: 'Satisfaction des Utilisateurs', kpi: 'Nombre de plaintes ou de tickets liés à l\'expérience utilisateur', mesure: 40, unite: 'N' },
    { axes: 'Outils et applications', sousAxes: 'Utilisation des Outils', kpi: 'Taux d\'adoption des nouveaux outils', mesure: 65, unite: '%' },
    { axes: 'Outils et applications', sousAxes: 'Utilisation des Outils', kpi: 'Utilisation moyenne des outils existants', mesure: 80, unite: '%' },
    { axes: 'Outils et applications', sousAxes: 'Sécurité des Applications', kpi: 'Nombre de vulnérabilités de sécurité identifiées', mesure: 10, unite: 'N' },
    { axes: 'Outils et applications', sousAxes: 'Sécurité des Applications', kpi: 'Nombre de vulnérabilités de sécurité corrigées', mesure: 8, unite: 'N' },
    { axes: 'Outils et applications', sousAxes: 'Sécurité des Applications', kpi: 'Taux de réussite des audits de sécurité', mesure: 92, unite: '%' },
    { axes: 'Architecture SI', sousAxes: 'Sécurité des Applications', kpi: 'Nombre d\'anomalie de sécurité par jour', mesure: 2, unite: 'N' },
    { axes: 'Architecture SI', sousAxes: 'Sécurité des Applications', kpi: 'Nombre d\'anomalie de sécurité par mois', mesure: 30, unite: 'N' },
    { axes: 'Architecture SI', sousAxes: 'Sécurité des Applications', kpi: 'Délai moyen de résolution', mesure: 3600, unite: 'S' },
    { axes: 'Architecture SI', sousAxes: 'Sécurité des Applications', kpi: 'Nombre des tests', mesure: 60, unite: 'N' },
    { axes: 'Architecture SI', sousAxes: 'Sécurité des Applications', kpi: 'Efficacité tests', mesure: 90, unite: '%' },
    { axes: 'Architecture SI', sousAxes: 'Réseaux', kpi: 'Débit réel', mesure: 500, unite: 'Mbps' },
    { axes: 'Architecture SI', sousAxes: 'Réseaux', kpi: 'Débit réel par rapport aux SLA', mesure: 95, unite: '%' },
    { axes: 'Architecture SI', sousAxes: 'Réseaux', kpi: 'Nombre d\'anomalie réseaux', mesure: 10, unite: 'N' },
    { axes: 'Architecture SI', sousAxes: 'Réseaux', kpi: 'Délai de résolution', mesure: 1800, unite: 'S' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Conformité au SLA', mesure: 99, unite: '%' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Taux d\'utilisation CPU', mesure: 65, unite: 'cores' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Capacité disponible CPU', mesure: 120, unite: 'cores' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Capacité total CPU', mesure: 200, unite: 'cores' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Taux d\'utilisation RAM', mesure: 1500, unite: 'Gb' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Capacité disponible RAM', mesure: 500, unite: 'Gb' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Capacité total RAM', mesure: 2000, unite: 'Gb' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Taux d\'utilisation stockage', mesure: 10000, unite: 'Gb' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Capacité disponible stockage', mesure: 5000, unite: 'Gb' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Capacité total stockage', mesure: 15000, unite: 'Gb' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Anomalie', mesure: 15, unite: 'N' },
    { axes: 'Architecture SI', sousAxes: 'Infrastructure IT', kpi: 'Résolution', mesure: 2400, unite: 'S' },
  ];

  getKpiData(): KpiData[] {
    return this.kpiData;
  }

  getKpiDataGroupedBySousAxes(data: string[][]): { [key: string]: KpiData[] } {
    const transformedData = data.slice(1).map(item => {
      return {
        axes: item[0],
        sousAxes: item[1],
        kpi: item[2],
        mesure: parseFloat(item[3]),
        unite: item[4]
      };
    });

    return transformedData.reduce((result, current) => {
      if (!result[current.sousAxes]) {
        result[current.sousAxes] = [];
      }
      result[current.sousAxes].push(current);
      return result;
    }, {} as { [key: string]: KpiData[] });
  }

  getKpiDataGroupedByAxes(data: string[][]): { [key: string]: KpiData[] } {
    const transformedData = data.slice(1).map(item => {
      return {
        axes: item[0],
        sousAxes: item[1],
        kpi: item[2],
        mesure: parseFloat(item[3]),
        unite: item[4]
      };
    });

    return transformedData.reduce((result, current) => {
      if (!result[current.axes]) {
        result[current.axes] = [];
      }
      result[current.axes].push(current);
      return result;
    }, {} as { [key: string]: KpiData[] });
  }
}
