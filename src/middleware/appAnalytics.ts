import { History } from 'history';

type AppAnalyticsProps = {
  history: History
}

export default class AppAnalytics {

  history: History

  constructor({ history }: AppAnalyticsProps) {
    this.history = history

    this.initAnalytics()
  }

  initAnalytics() {
    this.history.listen((location, action) => {
      // In this place we can mount Google Analytics and other 
      console.info('AppAnalytics', { location, action });
    });
  }


}