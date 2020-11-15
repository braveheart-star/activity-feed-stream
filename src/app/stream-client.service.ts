import { Injectable } from '@angular/core';

import { connect } from 'getstream';

import { StreamActivity } from './stream-activity';

const APP_KEY = 'x23jwj5psfqt';
const APP_ID = '100206';

// add group and name of it.
const FEED_GROUP = 'exe115';

// name feed_id and  generate token
const FEED_ID = 'shixiong';
const FEED_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiIqIiwiZmVlZF9pZCI6InNoaXhpb25nIiwidXNlcl9pZCI6IioifQ.tPw64YkzEl55W8I6B1CCgreoeQehNHD5WUJ8dzkwv2g';


@Injectable({
  providedIn: 'root'
})
export class StreamClientService {
  client: any;

  constructor() {
    this.client = connect(APP_KEY, null, APP_ID);

    // Instantiate a new client (client side)
  }


  getFeed(): Promise<StreamActivity[]> {
    // Instantiate the feed via factory method
    const feed = this.client.feed(FEED_GROUP, FEED_ID, FEED_TOKEN);
    console.log('get feed ==> ', feed)

    // Fetch the feed and pick the results property off the response object
    return feed.get().then(response => response.results);
  }

  addActivity(activity: StreamActivity): Promise<string> {
    // Instantiate the feed via factory method
    const feed = this.client.feed(FEED_GROUP, FEED_ID, FEED_TOKEN);
    const addActivityPromise = feed.addActivity(activity)
      .then(response => response.id);

    // return the promise resolution
    return Promise.resolve(addActivityPromise);
  }



}
