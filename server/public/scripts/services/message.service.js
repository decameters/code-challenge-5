app.service('MessageService', ['$http', function ($http) {
    var self = this;

    self.sendMessage = function (newMessage) {
        console.log(newMessage);

        $http({
            method: 'POST',
            url: '/message',
            data: newMessage
        }).then(function (response) {
            console.log('response', response);
            newMessage.username = '';
            newMessage.message = '';
            self.getMessage();
        })
    }

    self.message = { list: [] };

    self.getMessage = function () {
        console.log('in getMessage');

        $http({
            method: 'GET',
            url: '/message'
        }).then(function (response) {
            console.log('response', response);
            self.message.list = response.data;
        })
    }

    self.getMessage();

}]);
