( function () {
	$( window ).scroll( function () {
		if ( parseInt( this.scrollY, 10 ) >= 460  ) {
			$( 'nav.navbar' ).addClass( 'glue-top' );
			$( '.content-1' ).addClass( 'glue-buffer' );
		} else {
			$( 'nav.navbar' ).removeClass( 'glue-top' );
			$( '.content-1' ).removeClass( 'glue-buffer' );
		}
	} )
} )();