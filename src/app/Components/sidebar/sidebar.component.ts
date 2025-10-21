import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 openSection: string | null = null;

  storeSelected = false;     // دا هيتغيّر لما تختاري مخزن
  categorySelected = false;  // دا هيتغيّر لما تختاري كاتيجوري

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }
}
