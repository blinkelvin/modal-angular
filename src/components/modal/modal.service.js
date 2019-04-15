function modalService($http) {

  return {
    getData: () => {
      return $http.get('server/data.json')
        .then(prepareResponse)
    }
  }

}

function prepareResponse(response) {
  return response.data
}

/* @ngInject */
export default modalService;
