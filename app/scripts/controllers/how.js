'use strict';

/**
 * @ngdoc function
 * @name bvl39App.controller:HowCtrl
 * @description
 * # HowCtrl
 * Controller of the bvl39App
 */
angular.module('bvl39App')
  .controller('HowCtrl', ['$scope', '$log', '$rootScope', function ($scope, $log, $rootScope) {
 	$scope.display = function(index){
      var messages = [
        "We use several details of your move to create each individual moving quote. The price range is based on the size of your inventory, the date you're moving, the distance of your move and that particular route's popularity. Any extra services you'll need will also affect your moving quote. All these factors play a major role in shaping the price of your move.",
        "Yes, it's possible to receive a quote as low as $999 based on your move criteria. For example, a very small shipment from a studio apartment moving a short distance during an off peak season can be quoted as low as $999.",
        "When submitting your information to BudgetVanLines.com, you'll receive multiple moving quotes from companies that can service your specific route so you don't waste time talking to companies that can't.  These companies compete for your business, assuring you the best possible price. All companies in the network are licensed by the FMCSA and will contact you with individual moving quotes.",
        "Budget Van Lines is the nation's largest household goods moving broker. We carry a wide range of licensed and reputable carriers in our network that service long distance moves across the country. BudgetVanLines.com allows you to receive competing quotes from licensed movers available for your move as well as an individual quote from Budget Van Lines."
      ];
      //$log.info(messages);
      $scope.answer_msg = messages[index];
    }; 

  }]);