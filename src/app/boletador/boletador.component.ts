import { Component } from '@angular/core';
import { FeatureToggleService } from '../feature-toggle.service';

@Component({
  selector: 'app-boletador',
  templateUrl: './boletador.component.html',
  styleUrls: ['./boletador.component.scss']
})
export class BoletadorComponent {
  constructor(private featureToggleService: FeatureToggleService) {}

  isBoletadorEnabled(): boolean {
    return this.featureToggleService.isBoletadorEnabled();
  }
}
