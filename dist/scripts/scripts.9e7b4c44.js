"use strict";function $promise(a){var b={ajax:function(a,b,c){var d=new Promise(function(d,e){var f=new XMLHttpRequest,g=b;if(c){g+="?";var h=0;for(var i in c)c.hasOwnProperty(i)&&(h++&&(g+="&"),g+=encodeURIComponent(i)+"="+encodeURIComponent(c[i]))}f.open(a,g),f.send(),f.onload=function(){this.status>=200&&this.status<300?d(this.response):e(this.statusText)},f.onerror=function(){e(this.statusText)}});return d}};return{get:function(c){return b.ajax("GET",a,c)},post:function(c){return b.ajax("POST",a,c)},put:function(c){return b.ajax("PUT",a,c)},"delete":function(c){return b.ajax("DELETE",a,c)}}}var Ziphelp=function(a){var b=angular.element,c=this;this.zf=a[0],this.par=this.zf.parentNode,this.input=b(this.par).find("input"),this.close=b(this.par).find(".close")[0],console.log(this.close),this.zf.isClicked=!1,this.close.addEventListener("click",function(){this.zf.style.display="none",this.zf.isClicked=!1}.bind(this)),b(document).mouseup(function(a){var d=b(c.zf);d.is(a.target)||0!==d.has(a.target).length||(d.hide(),c.zf.isClicked=!1)})};Ziphelp.prototype.close=function(){this.zf.style.display="none",this.zf.isClicked=!1},Ziphelp.prototype.toggle=function(){this.zf.isClicked?(this.zf.style.display="none",this.zf.isClicked=!1):(this.zf.style.display="block",this.zf.isClicked=!0)},Ziphelp.prototype.getValue=function(){return this.input.val()},Ziphelp.prototype.setValue=function(a){this.input.val(a)};var gs;angular.module("bvl39App",["ngResource","ngValidate","ngMask","ui.router"]).config(["$stateProvider","$locationProvider","$urlRouterProvider",function(a,b,c){a.state("home",{url:"/",templateUrl:"views/slide1.html",controller:"slide1Ctrl"}).state("/step2",{templateUrl:"views/slide2.html",controller:"slide2Ctrl"}).state("/loader",{templateUrl:"views/loader.html",controller:"ldrCtrl"}).state("/step3",{templateUrl:"views/slide3.html",controller:"slide3Ctrl"}).state("/thank-you",{templateUrl:"views/thank-you.html",controller:"thankYouCtrl"}),c.when("","/"),c.otherwise("/")}]).directive("jqdatepicker",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){b.datepicker({dateFormat:"mm/dd/yy",onSelect:function(b){a.formData.movedate=b,a.$apply()}})}}}).directive("ziphelp",function(){return{restrict:"E",link:function(a,b,c){var d=new Ziphelp(b),e=b[0].parentNode;console.log(d),angular.element(e).find(".ziphelp_btn").click(function(a){a.preventDefault(),d.toggle()})},templateUrl:"views/zipfinder.html",replace:!0}}).directive("googlesearch",function(){return{restrict:"A",link:function(a,b,c){var d=b[0];angular.element(d).on("focus",function(c){gs=new GoogleSearch(b,a)})}}}),angular.module("bvl39App").controller("MainCtrl",function(){}),angular.module("bvl39App").controller("slide1Ctrl",["$scope","$location","$rootScope","$http","$state",function(a,b,c,d,e){a.validationOptions={rules:{from_zip:{required:!0,minlength:5,maxlength:5}},messages:{from_zip:{required:"Please enter in your zip code correctly",minlength:"Must be 5 digits",maxlength:"Cannot be more than 5 digits"}},errorElement:"div",submitHandler:function(){e.go("/step2")}},a.formData={}}]),angular.module("bvl39App").controller("slide2Ctrl",["$scope","$log","$location","$rootScope","$state",function(a,b,c,d,e){a.validationOptions={rules:{to_zip:{required:!0,minlength:5,maxlength:5},move_date:{required:!0},move_size:{required:!0}},messages:{zip:{required:"Please enter in your zip code correctly",minlength:"Must be 5 digits",maxlength:"Cannot be more than 5 digits"},move_date:{required:"Please select a date"},move_size:{required:"Please select a move size"}},errorElement:"div",submitHandler:function(){e.go("/loader")}},a.zipHelp=function(a){a.preventDefault()},a.calHelp=function(a){a.preventDefault(),angular.element("#move_date").datepicker("show")},a.formData={}}]),angular.module("bvl39App").controller("ldrCtrl",["$scope","$state","$timeout",function(a,b,c){a.message="Calculating...",a.loaderPercent=0,a.countNumber=function(){function d(){c(function(){a.loaderPercent++,a.loaderPercent<50?d():a.loaderPercent>=50&&a.loaderPercent<100?(e=f,d(),a.message="Searching For Movers"):100==a.loaderPercent&&(a.message="Matching Movers Were Found!",c(function(){b.go("/step3")},2e3))},e)}var e=68,f=72;d()},a.countNumber(),a.date=new Date}]),angular.module("bvl39App").controller("slide3Ctrl",["$scope","$log","$location","$rootScope","$state",function(a,b,c,d,e){a.validationOptions={rules:{first_name:{required:!0},last_name:{required:!0},email:{required:!0},phone:{required:!0,minlength:14,maxlength:14}},messages:{first_name:{required:"Please enter your first name"},last_name:{required:"Please enter your last name"},email:{required:"Please enter your email address"},phone:{required:"Please enter your phone number",minlength:"Phone number must be 10 digits",maxlength:"Phone number cannot be greater than 10 digits"}},errorElement:"div",submitHandler:function(){e.go("/thank-you")}},a.formData={}}]),angular.module("bvl39App").controller("HowCtrl",function(){}),angular.module("bvl39App").controller("DiscCtrl",function(){this.hello=function(){console.log("hello")},this.hello()}),angular.module("bvl39App").controller("thankYouCtrl",["$scope","$location","$rootScope",function(a,b,c){}]);var GoogleSearch=function(a,b){this.$=angular.element,this.elem=a[0],this.placeSearch,this.place,this.scope=b,this.autocomplete,this.ziphelp=this.elem.parentNode.parentNode,this.input=$('.step input[type="tel"]'),this.inputId=$(this.input).attr("id"),this.componentForm={street_number:"short_name",route:"long_name",locality:"long_name",administrative_area_level_1:"short_name",country:"long_name",postal_code:"short_name"},this.autocomplete=new google.maps.places.Autocomplete(this.elem,{type:["geocode"]});var c=this;this.$(this.elem).keypress(function(a){return 13==a.which?(google.maps.event.addListener(c.autocomplete,"place_changed",function(){c.fillInAddress()}),!1):void 0})};GoogleSearch.prototype.fillInAddress=function(){this.place=this.autocomplete.getPlace();var a=this,b=[];try{for(var c=0;c<this.place.address_components.length;c++){var d=this.place.address_components[c].types[0];if(this.componentForm[d]){var e=this.place.address_components[c][this.componentForm[d]];b[d]=e}}if(null!=b.postal_code){var f=b.postal_code;a.input.val(""),a.input.val(b.postal_code),$(a.input).validate(),$(a.ziphelp).hide(),a.scope.formData[a.inputId]=f,a.scope.$apply()}else{var g=({city:b.locality,state:b.administrative_area_level_1},"http://www.omdbapi.com/"),h={t:"Game of Thrones",Season:"1",Episode:"1"};$promise(g).get(h).then(function(b){console.log(b),$(a.ziphelp).hide()},function(a){console.log(a)})}}catch(i){}},angular.module("bvl39App").run(["$templateCache",function(a){a.put("views/disclaimer.html","<div> <p>*<span>Disclaimer:</span> Once submitting a quote request on BudgetVanLines.com, based on your search criteria, our system will match you with licensed third party companies that can service your route. Budget Van Lines Inc, a federally licensed moving broker, could also be one of the companies competing for your business. Budget Van Lines is not a motor carrier and does not own moving trucks. Budget Van Lines will generate a quote for you based on the details of your intended move, as well as the availability of licensed motor carriers in Budget Van Lines' network.</p> </div>"),a.put("views/how.html",'<div> <h4>How It Works?</h4> <div> <ol> <li> <div class="sprite howImg checkImg"></div> <div>1. Enter move details</div> </li> <li> <div class="sprite howImg costImg"></div> <div>2. View estimated cost</div> </li> <li> <div class="sprite howImg quoteImg"></div> <div>3. Get quote from movers</div> </li> </ol> </div> </div>'),a.put("views/loader.html",'<section id="loader"> <h2>{{ message }}</h2> <div class="loader_img"> <img src="{{\'images/bvl_loader_matthew-edition.50b82b6f.gif?\' + date }}"> </div> </section>'),a.put("views/main.html",""),a.put("views/slide1.html",'<section id="slide1"> <div class="form_main left"> <h1>Moving Price Calculator</h1> <h2>Rates as low as $999</h2> <form name="register_form" ng-validate="validationOptions"> <div class="box basic"></div> <div class="step"> <label>Where are you moving from?</label> <input type="tel" id="from_zip" name="from_zip" placeholder="Enter ZIP" ng-model="formData.from_zip" mask="99999" required> <button class="ziphelp_btn zip_position">ZIP Help</button> <ziphelp></ziphelp> <div class="calculate"> <!--   <input type="submit" class="submit" value="Calculate"> --> <button type="submit" class="submit">Calculate</button> </div> </div> </form> <div class="trusted_partners"> <a href="#"><div class="sprite infoImg"></div></a> <a href="#"><div class="sprite bbbImg"></div></a> <a href="#"><div class="sprite nortonImg"></div></a> <a href="#"><div class="sprite lockImg"></div> <div class="privacy_policy"><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></div> </a></div> </div> <div class="moving_people"></div> <div> <pre>{{ formData | json }}</pre> </div> </section>'),a.put("views/slide2.html",'<section id="slide2"> <div class="form_main left"> <form ng-validate="validationOptions"> <div class="box basic"></div> <div class="step"> <div class="input_area"> <label>Where are you moving to?</label> <input name="to_zip" id="to_zip" type="tel" placeholder="ZIP Code" ng-model="formData.to_zip" mask="99999" autocomplete="off"> <button class="ziphelp_btn zip_position">ZIP Help</button> <ziphelp></ziphelp> </div> <div class="input_area"> <label>When is your move date?</label> <input name="move_date" id="move_date" type="text" placeholder="Move Date" ng-model="formData.move_date" jqdatepicker autocomplete="off"> <button class="ziphelp_btn zip_position" ng-click="calHelp($event)">Calendar</button> </div> <div class="input_area"> <label>How large is your move?</label> <select name="move_size" id="move_size" ng-model="formData.move_size"> <option selected value="" style="color: #BFDAE6" disabled>Select a Size</option> <option value="Studio">Studio</option> <option value="1 Bedroom">1 Bedroom</option> <option value="2 Bedrooms">2 Bedrooms</option> <option value="3 Bedrooms">3 Bedrooms</option> <option value="4 Bedrooms">4 Bedrooms</option> <option value="5 Bedrooms">5 Bedrooms</option> <option value="6 Bedrooms">6 Bedrooms</option> <option value="Commercial Move">Commercial Move</option> </select> <!--             <input name="move_size" id="move_size" type=\'tel\' placeholder="Move Size" autocomplete="off"/> --> </div> <div class="calculate"> <button type="submit" class="submit">Calculate</button> </div> </div> </form> <div class="trusted_partners"> <a href="#"><div class="sprite infoImg"></div></a> <a href="#"><div class="sprite bbbImg"></div></a> <a href="#"><div class="sprite nortonImg"></div></a> <a href="#"><div class="sprite lockImg"></div> <div class="privacy_policy"><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></div> </a></div> </div> <div class="country_map"></div> <div> <pre>{{ formData | json }}</pre> </div> </section>'),a.put("views/slide3.html",'<section id="slide3"> <h2>Next our system will display your ballpark estimate</h2> <h3>Please complete this final step accurately. Movers will contact you by phone or email with their quotes and our system will also display your ballpark estimate.</h3> <div class="form_main left"> <form ng-validate="validationOptions"> <div class="box basic"></div> <div class="step"> <div class="input_area"> <label>Full Name</label> <input name="first_name" id="first_name" class="name space" type="tel" placeholder="First" ng-model="formData.first_name"> <input name="last_name" id="last_name" class="name" type="tel" placeholder="Last" ng-model="formData.last_name"> </div> <div class="input_area"> <label>Valid Email</label> <input name="email" id="email" type="tel" placeholder="Your email address" ng-model="formData.email"> </div> <div class="input_area"> <label>Valid Phone</label> <input name="phone" mask="(999) 999-9999" id="phone" type="tel" placeholder="(  )  -    " ng-model="formData.phone"> </div> <div class="calculate"> <button class="submit">Calculate</button> </div> </div> </form> <div class="trusted_partners"> <a href="#"><div class="sprite infoImg"></div></a> <a href="#"><div class="sprite bbbImg"></div></a> <a href="#"><div class="sprite nortonImg"></div></a> <a href="#"><div class="sprite lockImg"></div> <div class="privacy_policy"><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></div> </a></div> </div> <div class="google_map"></div> <div> <pre>{{ formData | json }}</pre> </div> </section>'),a.put("views/thank-you.html",'<section id="thankyou"> <h2>Thank You!</h2> </section>'),a.put("views/zipfinder.html",'<div class="zipfinder"> <h4>Enter City or State</h4> <div class="content"> <input type="text" placeholder="Enter Zip" googlesearch> </div> <div class="zip-arrow"> </div> <div class="close">X</div> </div>')}]);