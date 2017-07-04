var BalletDancer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 400;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append($('<img src="asset/odette.png"></img>'));
};

BalletDancer.prototype = Object.create(Dancer.prototype);
BalletDancer.prototype.constructor = BalletDancer;

BalletDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  console.log(this.$node.attr('class'));

  if (this.$node.hasClass('ballet-dancer-right')) {
    this.$node.removeClass('ballet-dancer-right');
    this.$node.addClass('ballet-dancer-left');
  } else if (this.$node.hasClass('ballet-dancer-left')) {
    this.$node.removeClass('ballet-dancer-left');
    this.$node.addClass('ballet-dancer-right');
  } else {
    this.$node.addClass('ballet-dancer-left');
  }
};