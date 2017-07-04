describe('carltonDancer', function() {

  var carltonDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    carltonDancer = new makeCarltonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(carltonDancer.$node).to.be.an.instanceof(jQuery);
  });
});
