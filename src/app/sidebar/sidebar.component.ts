import { Component } from '@angular/core';
import { FeatureToggleService } from '../feature-toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private featureToggleService: FeatureToggleService) {}

  isBoletadorEnabled(): boolean {
    return this.featureToggleService.isBoletadorEnabled();
  }

  isControlEnabled(): boolean {
    return this.featureToggleService.isControlEnabled();
  }
}
