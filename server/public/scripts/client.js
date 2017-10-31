var app = angular.module('myApp', []);

app.controller('apicontroller', function($http){
    var ac = this;
    console.log('controller running');
    
    getJoke();
    function getJoke() {
        $http.get('https://api.chucknorris.io/jokes/random').then(function(response){
        //console.log('response', response);
        ac.chuckNorrisJoke = response.data.value;
        //console.log(ac.chuckNorrisJoke);
        
    })
    }
})  