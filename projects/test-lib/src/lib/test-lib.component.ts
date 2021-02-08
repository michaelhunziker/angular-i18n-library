import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p i18n="some meaning 1|some description 1">
      some html translation from test-lib
    </p>
  `,
  styles: [
  ]
})
export class TestLibComponent implements OnInit {

  test = $localize`:some meaning 2: some description 2:some typescript translation from test-lib`;

  constructor() { }

  ngOnInit(): void {
  }

}
