
function slidePlugin( activeSlide = 0 )
{
	const slides = document.querySelectorAll('.slide');
	console.log(slides[0]);

	slides[activeSlide].classList.add( 'active' );

	for ( const slide of slides ) {
		slide.addEventListener( 'click', () =>
		{
			clearActiveClasses();
			slide.classList.add( 'active' );
		} )
	}

	function clearActiveClasses()
	{
		slides.forEach( ( slide ) =>
		{
			slide.classList.remove( 'active' );
		} )
	}
}

slidePlugin( 4 );