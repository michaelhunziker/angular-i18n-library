import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p i18n>
      test-lib works!
    </p>
  `,
  styles: [
  ]
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
