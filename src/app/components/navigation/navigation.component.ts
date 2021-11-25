import { Component, OnInit } from '@angular/core';
import { RoutesMap } from 'src/app/models/constants';

@Component({
  selector: 'hem-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  routesMap = RoutesMap;

  constructor() {}

  ngOnInit(): void {}
}
