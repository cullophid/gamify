'use strict';


module.exports = service;
service.$inject = ['$http'];

function service ($http) {
    var self = this;
    
    self.update = function () {
        return $http.get('/api/users/1')
            .then(function  (res) {
                self.user = res.data;
            });
    }
}