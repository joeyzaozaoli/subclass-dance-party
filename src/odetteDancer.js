var OdetteDancer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 600;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append($('<img src="asset/odette.png"></img>'));
};

OdetteDancer.prototype = Object.create(Dancer.prototype);
OdetteDancer.prototype.constructor = OdetteDancer;

OdetteDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

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