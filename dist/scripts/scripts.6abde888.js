"use strict";angular.module("bvl39App",[]),angular.module("bvl39App").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("bvl39App").run(["$templateCache",function(a){a.put("views/main.html",'<section> <div class="form_main left"> <h1>Moving Cost Calculator</h1> <h2>Rates as low as $999</h2> <form> <label>Where are you moving from?</label> <input type="tel" placeholder="ZIP Code"> <button>Zip Help</button> <button>Calculate</button> </form> </div> <div class="moving_people left"> </div> </section>')}]);