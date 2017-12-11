app.controller('MessageController', ['MessageService', function (MessageService) {
    var self = this;

    self.message = MessageService.message;
    
}])