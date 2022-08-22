const item = document.querySelector( '.item' ),
	placeholders = document.querySelectorAll( '.placeholder' );

item.addEventListener( 'dragstart', dragstart );
item.addEventListener( 'dragend', dragend );


placeholders.forEach( ( placeholder, i ) =>
{
	placeholder.addEventListener( 'dragover', dragover );
	placeholder.addEventListener( 'dragenter', ( event ) =>
	{
		if ( i === 0 ) {
			event.target.classList.add( 'start' );
		} else if ( i === 1 ) {
			event.target.classList.add( 'progress' );
		} else {
			event.target.classList.add( 'done' );
		}
	} );
	placeholder.addEventListener( 'dragleave', dragleave );
	placeholder.addEventListener( 'drop', dragdrop );
} )

function dragstart( event )
{
	event.target.classList.add( 'hold' );
	setTimeout( () =>
	{
		event.target.classList.add( 'hide' );
	}, 0 );

}

function dragend( event )
{
	event.target.classList.remove( 'hold', 'hide' );
}

function dragover( event )
{
	event.preventDefault();
}

// function dragenter( event )
// {
// 	event.target.classList.add( 'hovered' );

// }


function dragleave( event )
{
	event.target.classList.remove( 'start', 'progress', 'done' );
}

function dragdrop( event )
{
	event.target.append( item );
	event.target.classList.remove( 'start', 'progress', 'done' );
}