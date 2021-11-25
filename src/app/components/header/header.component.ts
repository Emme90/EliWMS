import { Component, OnInit } from '@angular/core';
import { RoutesMap } from 'src/app/models/constants';

@Component({
  selector: 'hem-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routesMap = RoutesMap;

  constructor() {}

  ngOnInit(): void {}
}
