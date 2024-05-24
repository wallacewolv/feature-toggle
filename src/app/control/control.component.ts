import { Component } from '@angular/core';
import { FeatureToggleService } from '../feature-toggle.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent {
  constructor(private featureToggleService: FeatureToggleService) {}

  isControlEnabled(): boolean {
    return this.featureToggleService.isControlEnabled();
  }
}
