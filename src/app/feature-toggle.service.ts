import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  private controlEnabled: boolean = false;
  private boletadorEnabled: boolean = false;

  toggleControl(): void {
    this.controlEnabled = !this.controlEnabled;
  }

  toggleBoletador(): void {
    this.boletadorEnabled = !this.boletadorEnabled;
  }

  isControlEnabled(): boolean {
    return this.controlEnabled;
  }

  isBoletadorEnabled(): boolean {
    return this.boletadorEnabled;
  }
}
