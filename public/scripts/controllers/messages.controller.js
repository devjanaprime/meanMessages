myApp.controller( 'MessagesController', [ 'MessagesService', function( MessagesService ){
    console.log( 'NG' );
    var vm=this;

    vm.submitMessage = function(){
        console.log( 'in submitMessage:', vm.messageIn );
        var messageToSend = {
            from: vm.name,
            message: vm.messageIn
        }; //end messageToSend
        console.log( 'sending:', messageToSend );
        // send this to server via our service
        MessagesService.postMessage( messageToSend );
    }; //end submitMessage

    vm.submitName = function(){
        vm.name = vm.nameIn;
    }; // end submitName

    vm.messages = [ { from: 'test', message: 'test test test' } ];
}]);