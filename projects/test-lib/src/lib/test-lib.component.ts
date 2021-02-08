import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p i18n>
      some html translation from test-lib
    </p>
  `,
  styles: [
  ]
})
export class TestLibComponent implements OnInit {

  test = $localize`some typescript translation from test-lib`;

  constructor() { }

  ngOnInit(): void {
  }

}
