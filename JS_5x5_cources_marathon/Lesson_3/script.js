const upBtn = document.querySelector( '.up-button' );
const downBtn = document.querySelector( '.down-button' );
const mainSlide = document.querySelector( '.main-slide' );
const countSlide = mainSlide.children.length;
const container = document.querySelector( '.container' );
const sideBar = document.querySelector( '.sidebar' );

let count = 0;

sideBar.style.top = `-${( countSlide - 1 ) * 100}vh`;

upBtn.addEventListener( 'click', () =>
{
	transformSlide( 'up' );
} );

downBtn.addEventListener( 'click', () =>
{
	transformSlide( 'down' );
} );

document.addEventListener( 'keydown', ( event ) =>
{
	if ( event.key === 'ArrowUp' ) {
		transformSlide( 'up' );
	} else if ( event.key === 'ArrowDown' ) {
		transformSlide( 'down' );
	}
} )

function transformSlide( direction )
{
	if ( direction === 'up' ) {
		count++;
		if ( count === countSlide ) {
			count = 0;
		}
	} else if ( direction === 'down' ) {
		count--;
		if ( count < 0 ) {
			count = countSlide - 1;
		}
	}

	const heightContainer = container.clientHeight;

	mainSlide.style.transform = `translateY(-${count * heightContainer}px)`;
	sideBar.style.transform = `translateY(${count * heightContainer}px)`;
}
