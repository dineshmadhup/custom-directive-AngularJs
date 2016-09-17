app.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       //Isolated scope-worked as a model for directive, means this scope is available for directive, not from one which is defined in controller
       scope: {
           personName: "@", //poke a text hole
           personAddress: "@",
           personCity: "@",
           personState: "@",
           personZip: "@"
       }
   }
});