app.controller('MessageController', ['MessageService', function (MessageService) {
    var self = this;

    self.sendMessage = MessageService.sendMessage;

    self.message = MessageService.message;
}])