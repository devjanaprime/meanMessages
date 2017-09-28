myApp.service( 'MessagesService', function( $http ){
    var self=this;

    self.postMessage = function( newMessage ){
        console.log( 'in service:', newMessage );
        $http({
            method: 'POST',
            url: '/messages',
            data: newMessage
        });
    }; // testing some BS
}); // end service