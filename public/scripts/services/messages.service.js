myApp.service( 'MessagesService', function( $http ){
    var self=this;

    self.getMessages = function(){
        console.log( 'in get messages' );
        $http({
            method: 'GET',
            url: '/messages'
        }).then( function( response ){
            console.log( 'back from get with:', response );
        });
    }; // end get messages

    self.postMessage = function( newMessage ){
        console.log( 'in service:', newMessage );
        $http({
            method: 'POST',
            url: '/messages',
            data: newMessage
        });
    }; // testing some BS
}); // end service