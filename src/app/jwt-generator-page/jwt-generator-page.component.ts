import { Component, OnInit } from '@angular/core';

declare let $: any;
import * as Clipboard from 'clipboard';

import { KJUR } from 'jsrsasign';

const JWT_SIGNING_ALGORITHM = 'HS256';

@Component({
  selector: 'app-jwt-generator-page',
  templateUrl: './jwt-generator-page.component.html',
  styleUrls: ['./jwt-generator-page.component.scss']
})
export class JwtGeneratorPageComponent implements OnInit {
  private readonly jwtHeader = { alg: JWT_SIGNING_ALGORITHM };

  public jsonWebToken;
  public apiSecret;
  public resource = '*';
  public action = '*';
  public feedId = '*';
  public userId = '*';

  constructor() { }

  ngOnInit() {
    const jwtClipboardCopyBtnId = '#jwtClipboardCopyBtn';
    const jwtClipboardCopyBtnTooltip = $(jwtClipboardCopyBtnId);
    jwtClipboardCopyBtnTooltip.foundation();
    const jwtClipboardCopyBtn = new Clipboard(jwtClipboardCopyBtnId);
    jwtClipboardCopyBtn.on('success', function (e) {
      jwtClipboardCopyBtnTooltip.foundation('show');
    });
    jwtClipboardCopyBtnTooltip.mouseout(function () {
      jwtClipboardCopyBtnTooltip.foundation('hide');
    })


    this.generateJWT();
  }

  onSubmit() {
    this.generateJWT();
    console.log('this.jsonWebToken=>', this.jsonWebToken);
    console.log('this.apiSecret=>', this.apiSecret);
    console.log('this.resource=>', this.resource);
    console.log('this.action=>', this.action);
    console.log('this.feedId=>', this.feedId);
    console.log('this.userId=>', this.userId);
  }

  private generateJWT() {
    if (!this.apiSecret) {
      return;
    }

    // Setup the JWT payload
    const jwtPayload = {
      resource: this.resource,
      action: this.action
    };

    // Add the optional feed id
    if (this.feedId) {
      jwtPayload['feed_id'] = this.feedId;
    }
    // Add the optional user id
    if (this.userId) {
      jwtPayload['user_id'] = this.userId;
    }

    const sHeader = JSON.stringify(this.jwtHeader);
    const sPayload = JSON.stringify(jwtPayload);

    this.jsonWebToken = KJUR.jws.JWS.sign(
      JWT_SIGNING_ALGORITHM,
      sHeader,
      sPayload,
      this.apiSecret
    );
  }

}
