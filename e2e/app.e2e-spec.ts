import { WeatherReportPage } from './app.po';

describe('weather-report App', () => {
  let page: WeatherReportPage;

  beforeEach(() => {
    page = new WeatherReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
