describe('gangnamDancer', function() {

  var gangnamDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    gangnamDancer = new makeGangNamDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(gangnamDancer.$node).to.be.an.instanceof(jQuery);
  });
});
