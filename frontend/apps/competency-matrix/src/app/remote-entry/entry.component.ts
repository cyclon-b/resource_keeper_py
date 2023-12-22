import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'workspace-competency-matrix-entry',
  template: `<workspace-nx-welcome></workspace-nx-welcome>`,
})
export class RemoteEntryComponent {}
