myApp.service( 'MessagesService', function( $http ){
    let sv=this;

    sv.getMessages = () => {
        console.log( 'in service getMessage' );
        return $http({
            method: 'GET',
            url: '/messages'
        }).then( ( response ) => {
            console.log( 'back from server with:', response );
            sv.messages = response;
        });
    }
});