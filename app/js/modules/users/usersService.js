module.exports = Service;
Service.$inject = ['$http'];

function Service ($http) {
  return {
    get: get
  }
  
  function get (userId) {
    return $http.get('/api/users/' + userId)
      .then(function (res) {
        return res.data;
      });
  } 
}