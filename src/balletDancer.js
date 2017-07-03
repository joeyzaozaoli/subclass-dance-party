var BalletDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append($('<img src="asset/odette.png"></img>'));
};

BalletDancer.prototype = Object.create(Dancer.prototype);
BalletDancer.prototype.constructor = BalletDancer;

BalletDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.animate({left: "+=1300"}, 10000);
  this.$node.animate({left: "-=1300"}, 10000);
};