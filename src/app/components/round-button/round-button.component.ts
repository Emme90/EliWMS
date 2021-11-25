import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hem-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
})
export class RoundButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() active!: boolean;
  @Input() disabled!: boolean;

  @Output() clickEmitter: EventEmitter<null> = new EventEmitter<null>();
  @Output() genreEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clickEmitter.emit();
    this.genreEmitter.emit(this.label);
  }
}
