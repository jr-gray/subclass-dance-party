// var makeGangNamDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

//   return blinkyDancer;
// };


var makeGangNamDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('gangnamdancer');
  this.$node.removeClass('dancer');
  this.$node.html('<img class="gangnamdancer" src="http://gifdanceparty.giphy.com/assets/dancers/cowboy.gif">');
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = this.step;
};

makeGangNamDancer.prototype = Object.create(makeDancer.prototype);
makeGangNamDancer.prototype.constructor = makeGangNamDancer;

makeGangNamDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};

makeGangNamDancer.prototype.lineUp = function() {
  this.$node.css('left', '65%');
};

