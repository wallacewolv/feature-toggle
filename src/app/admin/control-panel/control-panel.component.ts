import { Component } from '@angular/core';
import { FeatureToggleService } from '../../feature-toggle.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {
  constructor(private featureToggleService: FeatureToggleService) {}

  toggleControl(): void {
    this.featureToggleService.toggleControl();
  }

  toggleBoletador(): void {
    this.featureToggleService.toggleBoletador();
  }
}
