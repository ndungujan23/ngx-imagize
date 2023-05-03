import { NgxPixlrSampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: NgxPixlrSampleService;

  beforeEach(() => {
    sut = new NgxPixlrSampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});
