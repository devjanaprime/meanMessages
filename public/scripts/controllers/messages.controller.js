myApp.controller( 'MessagesController', [ 'MessagesService', function( MessagesService ) {
    console.log( 'NG' );
    let vm=this;
    vm.userName = '';

    vm.logIn = () => {
        if( vm.userName == '' && vm.nameIn != '' ){
            vm.userName = vm.nameIn;
        }
    } // end log in

    vm.logOut = () => {
        vm.userName = '';
        vm.nameIn = '';
    } // end log in

    vm.getMessages = () => {
        console.log( 'in service getMessage' );
        MessagesService.getMessages().then( () =>{
            vm.messages = MessagesService.messages;
            console.log( vm.messages );
        }); // end service call
    } // end getMessages

    vm.postMessage = () => {
    
    } // end getMessages
}]);