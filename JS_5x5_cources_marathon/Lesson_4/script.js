
const board = document.getElementById( 'board' );

const SQUARES_NUMBER = 500;


for ( let i = 0; i < SQUARES_NUMBER; i++ ) {
	const square = document.createElement( 'div' );
	square.classList.add( 'square' );

	square.addEventListener( 'mouseover', setColor );

	square.addEventListener( 'mouseleave', removeColor );

	board.append( square );

}

function setColor( event )
{
	const element = event.target;
	const randomColor = `rgb(${getRandomColor( 256 )},${getRandomColor( 256 )}, ${getRandomColor( 256 )})`;
	element.style.backgroundColor = randomColor;
	element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor( event )
{
	const element = event.target;
	setTimeout( () =>
	{
		element.style.backgroundColor = '#1d1d1d';
		element.style.boxShadow = `0 0 2px #000000`;
	}, 1000 );

}

function getRandomColor( max )
{
	return Math.floor( Math.random() * max );
}