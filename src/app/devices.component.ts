import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { DeviceDetailComponent } from './device-detail.component';
import { Device } from './device';

import { DeviceService } from './device.service';

@Component({
  selector: 'my-devices',
  template: `
    <h2>Devices</h2>
    <ul class="devices">
      <li *ngFor="let device of devices" (click)="onSelect(device)" [class.selected]="device === selectedDevice"><span class="badge">{{ device.id }}</span> {{ device.name }}</li>
    </ul>

    <device-detail [device]="selectedDevice"></device-detail>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .devices {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .devices li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .devices li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .devices li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .devices .text {
      position: relative;
      top: -3px;
    }
    .devices .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class DevicesComponent implements OnInit {
  title = 'Home IoT Station';
  devices: Device[];
  selectedDevice: Device;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  onSelect(device: Device): void {
    this.selectedDevice = device;
  }

  getDevices(): void {
    this.deviceService.getDevices().then(devices => this.devices = devices);
  }
}