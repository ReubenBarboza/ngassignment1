(function(){
'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController)
	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope){
		$scope.message="";
		$scope.showmessage="";
		$scope.words=[''];
		$scope.check=function(){
			$scope.words=$scope.message.split(',');
			$scope.words=$scope.words.filter(function(ele){return ele!=''});
			console.log($scope.words.length);
			if($scope.words.length==0){
				$scope.showmessage="Enter some data!";
			}
			else if($scope.words.length<=3){
				$scope.showmessage="Enjoy!";
			}
			else{
				$scope.showmessage="Too much!";

			}

		}
		
	}
}
	)()