"use strict";function $promise(a){var b={ajax:function(a,b,c){var d=new Promise(function(d,e){var f=new XMLHttpRequest,g=b;if(c){g+="?";var h=0;for(var i in c)c.hasOwnProperty(i)&&(h++&&(g+="&"),g+=encodeURIComponent(i)+"="+encodeURIComponent(c[i]))}f.open(a,g),f.send(),f.onload=function(){this.status>=200&&this.status<300?d(this.response):e(this.statusText)},f.onerror=function(){e(this.statusText)}});return d}};return{get:function(c){return b.ajax("GET",a,c)},post:function(c){return b.ajax("POST",a,c)},put:function(c){return b.ajax("PUT",a,c)},"delete":function(c){return b.ajax("DELETE",a,c)}}}var Ziphelp=function(a){var b=angular.element,c=this;this.zf=a[0],this.par=this.zf.parentNode,this.input=b(this.par).find("input"),this.close=b(this.par).find(".close")[0],console.log(this.close),this.zf.isClicked=!1,this.close.addEventListener("click",function(){this.zf.style.display="none",this.zf.isClicked=!1}.bind(this)),b(document).mouseup(function(a){var d=b(c.zf);d.is(a.target)||0!==d.has(a.target).length||(d.hide(),c.zf.isClicked=!1)})};Ziphelp.prototype.close=function(){this.zf.style.display="none",this.zf.isClicked=!1},Ziphelp.prototype.toggle=function(){this.zf.isClicked?(this.zf.style.display="none",this.zf.isClicked=!1):(this.zf.style.display="block",this.zf.isClicked=!0,this.input.focus())},Ziphelp.prototype.getValue=function(){return this.input.val()},Ziphelp.prototype.setValue=function(a){this.input.val(a)};var GoogleMap=function(a,b){$=angular.element;try{var c=b.formData1.from_zip,d=b.formData2.to_zip}catch(e){var c="90802",d="90036"}var f=function(){var a={zoom:8,scrollwheel:!0,navigationControl:!0,mapTypeControl:!0,scaleControl:!0,draggable:!0,disableDoubleClickZoom:!0,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.DEFAULT},b=new google.maps.Map(document.getElementById("map"),a),e=new google.maps.DistanceMatrixService;e.getDistanceMatrix({origins:[c],destinations:[d],travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.IMPERIAL},function(a,b){b==google.maps.DistanceMatrixStatus.OK});var f=new google.maps.DirectionsRenderer,g={markerOptions:{clickable:!1}};f.setMap(b),f.setOptions(g);var h=new google.maps.DirectionsService,i={origin:c,destination:d,optimizeWaypoints:!0,travelMode:google.maps.DirectionsTravelMode.DRIVING};h.route(i,function(a,b){if(b==google.maps.DirectionsStatus.OK){f.setDirections(a);a.routes[0]}})};f()};angular.module("bvl39App",["ngResource","ngValidate","ngMask","ui.router","ngSanitize","ngAnimate"]).config(["$stateProvider","$locationProvider","$urlRouterProvider",function(a,b,c){a.state("home",{url:"/",templateUrl:"views/slide1.html",controller:"slide1Ctrl"}).state("/step2",{templateUrl:"views/slide2.html",controller:"slide2Ctrl"}).state("/loader",{templateUrl:"views/loader.html",controller:"ldrCtrl"}).state("/step3",{templateUrl:"views/slide3.html",controller:"slide3Ctrl"}).state("/thank-you",{templateUrl:"views/thank-you.html",controller:"thankYouCtrl"}),c.when("","/"),c.otherwise("/")}]).directive("jqdatepicker",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){b.datepicker({dateFormat:"mm/dd/yy",minDate:-0,maxDate:"+90D",beforeShow:function(){angular.element("#ui-datepicker-div").addClass("bluedatepicker")},onSelect:function(b){a.formData.movedate=b,a.$apply()}})}}}).directive("ziphelp",function(){return{restrict:"E",link:function(a,b,c){var d=new Ziphelp(b),e=b[0].parentNode;console.log(d),angular.element(e).find(".ziphelp_btn").click(function(a){a.preventDefault(),d.toggle()})},templateUrl:"views/zipfinder.html",replace:!0}}).directive("googlesearch",function(){return{restrict:"A",link:function(a,b,c){var d=b[0];angular.element(d).on("focus",function(c){new GoogleSearch(b,a)})}}}).directive("googlemap",function(){return{restrict:"E",link:function(a,b,c,d){new GoogleMap(b,a)},replace:!0,templateUrl:"views/googlemap.html"}}),angular.module("bvl39App").controller("MainCtrl",["$scope","$window",function(a,b){a.open=function(a){b.open(a,"","width=350,height=550")}}]),angular.module("bvl39App").controller("slide1Ctrl",["$scope","$location","$rootScope","$http","$state",function(a,b,c,d,e){a.validationOptions={rules:{from_zip:{required:!0,minlength:5,maxlength:5}},messages:{from_zip:{required:"Please enter in your zip code correctly",minlength:"Must be 5 digits",maxlength:"Cannot be more than 5 digits"}},errorElement:"div",submitHandler:function(){c.formData1=a.formData,e.go("/step2")}},a.formData={},c.howState="step1",c.states=["step1","step2","step3"],c.count=0,c.toggle=function(){c.count++,c.count<c.states.length?c.howState=c.states[c.count]:(c.count=0,c.howState=c.states[0])};var f=angular.element(".how")[0];f.style.marginTop="409px"}]),angular.module("bvl39App").controller("slide2Ctrl",["$scope","$log","$location","$rootScope","$state",function(a,b,c,d,e){a.validationOptions={rules:{to_zip:{required:!0,minlength:5,maxlength:5},move_date:{required:!0},move_size:{required:!0}},messages:{zip:{required:"Please enter in your zip code correctly",minlength:"Must be 5 digits",maxlength:"Cannot be more than 5 digits"},move_date:{required:"Please select a date"},move_size:{required:"Please select a move size"}},errorElement:"div",submitHandler:function(){d.formData2=a.formData,e.go("/loader")}},a.zipHelp=function(a){a.preventDefault()},a.calHelp=function(a){a.preventDefault(),angular.element("#move_date").datepicker("show")},a.formData={}}]),angular.module("bvl39App").controller("ldrCtrl",["$scope","$state","$timeout",function(a,b,c){a.message="<h3>Calculating...</h3>",a.loaderPercent=0,a.countNumber=function(){function d(){c(function(){a.loaderPercent++,a.loaderPercent<50?d():a.loaderPercent>=50&&a.loaderPercent<100?(e=f,d(),a.message="<h3>Searching For Movers...</h3>"):100==a.loaderPercent&&(a.message="<h2>Matching Movers Were Found!</h2>",c(function(){b.go("/step3")},2e3))},e)}var e=68,f=72;d()},a.countNumber(),a.date=new Date}]),angular.module("bvl39App").controller("slide3Ctrl",["$scope","$log","$location","$rootScope","$state",function(a,b,c,d,e){a.validationOptions={rules:{first_name:{required:!0},last_name:{required:!0},email:{required:!0,email:!0},phone:{required:!0,minlength:14,maxlength:14}},messages:{first_name:{required:"Please enter your first name"},last_name:{required:"Please enter your last name"},email:{required:"Please enter your email address"},phone:{required:"Please enter your phone number",minlength:"Phone number must be 10 digits",maxlength:"Phone number cannot be greater than 10 digits"}},errorElement:"div",submitHandler:function(){d.formData3=a.formData,e.go("/thank-you")}},a.calculate=function(){},a.conversion=function(a,b){},a.formData={},d.howState="step4";var f=angular.element(".how")[0];f.style.marginTop="500px"}]),angular.module("bvl39App").controller("HowCtrl",["$scope","$log","$rootScope",function(a,b,c){a.display=function(b){var c=["We use several details of your move to create each individual moving quote. The price range is based on the size of your inventory, the date you're moving, the distance of your move and that particular route's popularity. Any extra services you'll need will also affect your moving quote. All these factors play a major role in shaping the price of your move.","Yes, it's possible to receive a quote as low as $999 based on your move criteria. For example, a very small shipment from a studio apartment moving a short distance during an off peak season can be quoted as low as $999.","When submitting your information to BudgetVanLines.com, you'll receive multiple moving quotes from companies that can service your specific route so you don't waste time talking to companies that can't.  These companies compete for your business, assuring you the best possible price. All companies in the network are licensed by the FMCSA and will contact you with individual moving quotes.","Budget Van Lines is the nation's largest household goods moving broker. We carry a wide range of licensed and reputable carriers in our network that service long distance moves across the country. BudgetVanLines.com allows you to receive competing quotes from licensed movers available for your move as well as an individual quote from Budget Van Lines."];a.answer_msg=c[b]}}]),angular.module("bvl39App").controller("DiscCtrl",function(){this.hello=function(){console.log("hello")},this.hello()}),angular.module("bvl39App").controller("FooterCtrl",["$scope","$log","$rootScope","$window",function(a,b,c,d){a.open=function(a){d.open(a,"","width=350,height=550")}}]),angular.module("bvl39App").controller("thankYouCtrl",["$scope","$location","$rootScope","$timeout",function(a,b,c,d){a.price1="999",a.price2="9999",a.loaded=!1,a.showPrice=function(){d(function(){a.prices="$"+a.price1+" to $"+a.price2,a.loaded=!0},3e3)},a.first_name=null!==a.formData3.first_name?a.formData3.first_name:"Vijay",a.last_name=null!==a.formData3.first_name?a.formData3.last_name:"Menon"}]);var GoogleSearch=function(a,b){this.$=angular.element,this.elem=a[0],this.placeSearch,this.place,this.scope=b,this.autocomplete,this.ziphelp=this.elem.parentNode.parentNode,this.input=$('.step input[type="tel"]'),this.inputId=$(this.input).attr("id"),this.componentForm={street_number:"short_name",route:"long_name",locality:"long_name",administrative_area_level_1:"short_name",country:"long_name",postal_code:"short_name"},this.autocomplete=new google.maps.places.Autocomplete(this.elem,{type:["geocode"]});var c=this;this.$(this.elem).keypress(function(a){return 13==a.which?(google.maps.event.addListener(c.autocomplete,"place_changed",function(){c.fillInAddress()}),!1):void 0}),this.$(this.elem).click(function(){google.maps.event.addListener(c.autocomplete,"place_changed",function(){c.fillInAddress()})})};GoogleSearch.prototype.fillInAddress=function(){this.place=this.autocomplete.getPlace();var a=this,b=[];try{for(var c=0;c<this.place.address_components.length;c++){var d=this.place.address_components[c].types[0];if(this.componentForm[d]){var e=this.place.address_components[c][this.componentForm[d]];b[d]=e}}if(null!=b.postal_code){var f=b.postal_code;a.input.val(""),a.input.val(b.postal_code),$(a.input).validate(),$(a.ziphelp).hide(),a.scope.formData[a.inputId]=f,a.scope.$apply()}else{var g=({city:b.locality,state:b.administrative_area_level_1},"http://www.omdbapi.com/"),h={t:"Game of Thrones",Season:"1",Episode:"1"};$promise(g).get(h).then(function(b){console.log(b),$(a.ziphelp).hide()},function(a){console.log(a)})}}catch(i){}},angular.module("bvl39App").run(["$templateCache",function(a){a.put("views/disclaimer.html","<div> <p>*<span>Disclaimer:</span> Once submitting a quote request on BudgetVanLines.com, based on your search criteria, our system will match you with licensed third party companies that can service your route. Budget Van Lines Inc, a federally licensed moving broker, could also be one of the companies competing for your business. Budget Van Lines is not a motor carrier and does not own moving trucks. Budget Van Lines will generate a quote for you based on the details of your intended move, as well as the availability of licensed motor carriers in Budget Van Lines' network.</p> </div>"),a.put("views/googlemap.html",'<div id="map" class="google_map"> </div>'),a.put("views/how.html",'<div> <h4>How It Works</h4> <div> <ol> <li> <div class="sprite howImg checkImg"></div> <div>1. Enter move details</div> </li> <li> <div class="sprite howImg costImg"></div> <div>2. View estimated cost</div> </li> <li> <div class="sprite howImg quoteImg"></div> <div>3. Get quote from movers</div> </li> </ol> </div> </div>'),a.put("views/loader.html",'<section id="loader"> <div ng-bind-html="message">{{ message }}</div> <div class="loader_img"> <img src="{{\'images/bvl_loader_matthew_edition_r1.1381d335.gif?\' + date }}"> </div> </section>'),a.put("views/main.html",""),a.put("views/slide1.html",'<section id="slide1"> <div class="form_main left"> <h1>Moving Price Calculator</h1> <h2>Rates as low as $999</h2> <form name="register_form" ng-validate="validationOptions"> <div class="box basic"></div> <div class="step"> <label>Where are you moving from?</label> <input type="tel" id="from_zip" name="from_zip" placeholder="From ZIP" ng-model="formData.from_zip" mask="99999" required> <button type="button" class="ziphelp_btn zip_position">ZIP Help</button> <ziphelp></ziphelp> <div class="calculate"> <!--   <input type="submit" class="submit" value="Calculate"> --> <button type="submit" class="submit">Calculate</button> </div> </div> </form> <div class="trusted_partners"> <a><div ng-click="toggle()" class="sprite infoImg"></div></a> <a><div class="sprite bbbImg"></div></a> <a><div class="sprite nortonImg"></div></a> <a><div class="sprite lockImg"></div></a> <div class="privacy_policy"><a ng-click="open(\'http://www.budgetvanlines.com/info/privacy-policy\')">Privacy Policy</a> | <a ng-click="open(\'http://www.budgetvanlines.com/info/terms-of-use\')">Terms of Use</a></div> </div> </div> <div class="moving_people"></div> </section>'),a.put("views/slide2.html",'<section id="slide2"> <div class="form_main left"> <form ng-validate="validationOptions"> <div class="box basic"></div> <div class="step"> <div class="input_area"> <label>Where are you moving to?</label> <input name="to_zip" id="to_zip" type="tel" placeholder="To ZIP" ng-model="formData.to_zip" mask="99999" autocomplete="off"> <button type="button" class="ziphelp_btn zip_position">ZIP Help</button> <ziphelp></ziphelp> </div> <div class="input_area"> <label>When is your move date?</label> <input name="move_date" id="move_date" type="text" placeholder="Move Date" ng-model="formData.move_date" jqdatepicker autocomplete="off"> <button id="cal" type="button" class="ziphelp_btn zip_position" ng-click="calHelp($event)"></button> </div> <div class="input_area"> <label>How large is your move?</label> <select name="move_size" id="move_size" ng-model="formData.move_size"> <option selected value="" style="color: #BFDAE6" disabled>Select home size</option> <option value="Studio">Studio</option> <option value="1 Bedroom">1 Bedroom</option> <option value="2 Bedrooms">2 Bedrooms</option> <option value="3 Bedrooms">3 Bedrooms</option> <option value="4 Bedrooms">4 Bedrooms</option> <option value="5 Bedrooms">5 Bedrooms</option> <option value="6 Bedrooms">6 Bedrooms</option> <option value="Commercial Move">Commercial Move</option> </select> <!--             <input name="move_size" id="move_size" type=\'tel\' placeholder="Move Size" autocomplete="off"/> --> </div> <div class="calculate"> <button type="submit" class="submit">Calculate</button> </div> </div> </form> <div class="trusted_partners"> <a><div ng-click="toggle()" class="sprite infoImg"></div></a> <a><div class="sprite bbbImg"></div></a> <a><div class="sprite nortonImg"></div></a> <a><div class="sprite lockImg"></div></a> <div class="privacy_policy"><a ng-click="open(\'http://www.budgetvanlines.com/info/privacy-policy\')">Privacy Policy</a> | <a ng-click="open(\'http://www.budgetvanlines.com/info/terms-of-use\')">Terms of Use</a></div> </div> </div> <div class="country_map"></div> </section>'),a.put("views/slide3.html",'<section id="slide3"> <h2>Next our system will display your ballpark estimate</h2> <h3>Please complete this final step accurately. Movers will contact you by phone or email with their quotes and our system will also display your ballpark estimate.</h3> <div class="form_main left"> <form ng-validate="validationOptions"> <div class="box basic"></div> <div class="step"> <div class="input_area"> <label>Full Name</label> <input name="first_name" id="first_name" class="name space" type="tel" placeholder="First" ng-model="formData.first_name"> <input name="last_name" id="last_name" class="name" type="tel" placeholder="Last" ng-model="formData.last_name"> </div> <div class="input_area"> <label>Valid Email</label> <input name="email" id="email" type="tel" placeholder="Your email address" ng-model="formData.email"> </div> <div class="input_area"> <label>Valid Phone</label> <input name="phone" mask="(999) 999-9999" id="phone" type="tel" placeholder="(  )  -    " ng-model="formData.phone"> </div> <div class="calculate"> <button type="submit" class="submit">Get My Quote</button> </div> </div> </form> </div> <googlemap></googlemap> <div class="trusted_partners"> <a><div class="sprite bbbImg"></div></a> <a><div class="sprite nortonImg"></div></a> <a><div class="sprite lockImg"></div></a> <div class="privacy_policy"><a ng-click="open(\'http://www.budgetvanlines.com/info/privacy-policy\')">Privacy Policy</a> | <a ng-click="open(\'http://www.budgetvanlines.com/info/terms-of-use\')">Terms of Use</a></div> </div> </section>'),a.put("views/thank-you.html",'<section id="thankyou"> <h2>Thank You {{ first_name + " " + last_name }}.</h2> <h3>Professional movers will now contact you</h3> <div class="quote-range"> {{ showPrice() }} <div ng-show="loaded"> <p>Your quote range is: <span>{{ prices }}</span></p> </div> <div ng-show="!loaded"> <p>Your quote range is: <img src="images/ajax-loader_r1.b31d13dd.gif"></p> </div> </div> <div class="etcetera"> <p>*This price range is not an actual quote and is based on industry averages. 1 bedroom apartment shipments can vary in size. You may need additional services like packing. Tariff pricing is different for each moving company.</p> </div> <div class="sitback"> <div class="nostress left"> <div class="nostress-dude left"></div> <h4>TAKING THE STRESS OUT OF MOVING</h4> <div class="clear"> <p>The search for your movers is done. You don\'t need to fill out any other forms, just sit back, relax and multiple movers will be in touch with you to give you competing quotes for your specific move.</p> </div> </div> <div class="onway right"> <div class="onway-cell left"></div> <h4>YOUR QUOTES ARE ON THEIR WAY</h4> <div class="clear"> <p>Your ballpark estimates will be sent to your email and your movers will soon contact you by phone. Be ready to speak with your movers regarding your inventory to receive a more accurate quote.</p> </div> </div> </div> </section>'),a.put("views/zipfinder.html",'<div class="zipfinder"> <h4>Enter City or State</h4> <div class="content"> <input type="text" placeholder="Enter Zip" googlesearch> </div> <div class="zip-arrow"> </div> <div class="close">X</div> </div>')}]);