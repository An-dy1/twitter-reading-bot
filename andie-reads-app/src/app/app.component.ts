import { Component } from '@angular/core';
const validUrl = require('valid-url');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'andie-reads-app';

  tweetlink: string = '';

  isValidTweetLink = (link: string) => {
    if (validUrl.isUri(link)) {
      return true;
    } else {
      return false;
    }
  };

  handleTweetButtonClick() {
    console.log(this.tweetlink);
    console.log(`valid link is: ${this.isValidTweetLink(this.tweetlink)}`);
  }
}
