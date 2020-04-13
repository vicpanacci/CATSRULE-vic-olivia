    let $bar = document.querySelector('.progressBar')
    let $progressBarText = document.querySelector('.progressBarText')
    let $h1 = document.getElementById('heading')
    let $titleBar = document.querySelector('.titleBar')
    let title = document.querySelector('h1').textContent
    let text = document.querySelector('main').textContent
    let $readingTime = document.getElementById('readingTime')
window.addEventListener('scroll', event => {
    let windowH = window.innerHeight
    let documentH = document.documentElement.scrollHeight
    let amtScrolled = window.scrollY
    let ttlAvailable = documentH - windowH
    let percent = amtScrolled / ttlAvailable

$bar.style.width = `${percent * 100}%`
$progressBarText.textContent = `${Math.round(percent*100)}%`
    let h1Top = $h1.offsetTop
    let h1Height = $h1.clientHeight

console.log(h1Top, h1Height, amtScrolled)
    if (amtScrolled > h1Top + h1Height) {
        console.log('H1 is off the top')
        $titleBar.classList.add(`show`)
        $titleBar.innerHTML = `${title}`;
    } else {
        $titleBar.classList.remove(`show`)
        $titleBar.innerHTML = ``;
    }
    })

    var $ = document.querySelector.bind(document)
    var $on = document.addEventListener.bind(document);
    
    var xMouse;
    var yMouse;
    $on('mousemove', function (e) {
        xMouse = e.clientX || e.pageX;
        yMouse = e.clientY || e.pageY;
    })
    
    var ball = $('#ball');
    var x = void 0,
        y = void 0,
        dx = void 0,
        dy = void 0,
        tx = 0, 
        ty = 0,
        key = -1;
    
        var followMouse = function followMouse () {
            key = requestAnimationFrame(followMouse);
    
            if(!x || !y) {
                x = xMouse;
                y = yMouse;
            } else {
                dx = (xMouse - x) * 0.125;        
                dy = (yMouse - y) * 0.125;
    
                if(Math.abs(dx) + Math.abs(dy) < 0.1) {
                    x = xMouse
                    y = yMouse
                } else {
                    x += dx;
                    y +=dy;
                }
            }
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
        };



let $show = document.querySelector('.show')


// A function that goes to the start of the show
let setFirstSlide = () => {

	// Find first element
	let $first = document.querySelector('.slide:first-child')

	// Adds a class to it
	$first.classList.add('current')

}


// A function that goes to the end of the show
let setLastSlide = () => {

}

// Remove ".current" from all ".slide"
let unsetSlides = () => {
	// 1. Locate the current slide
	let $curr = document.querySelector('.current')

	// 2. Remove the current class
	$curr.classList.remove('current')

	return $curr
}

// Previous slide
let prevSlide = () => {

}

// Next slide
let nextSlide = () => {

	let $curr = unsetSlides()

	// 3. Find the next sibling slide
	let $next = $curr.nextElementSibling

	if ($next != null) {
		// 4. If it exists, add the current class
		$next.classList.add('current')
	} else {
		// 5. If it doesn't exist, go back to the beginning
		setFirstSlide()
	}

}

// When the interface has fully loaded...
let windowLoaded = () => {
	// Check if there's a hash set, if so start at that slide
	// window.location.hash

	// else, use the first slide
	// Setup the first slide
	setFirstSlide()


	// Add all the event listeners
	document.querySelector('#next').addEventListener('click', nextSlide)

}


window.addEventListener('load', windowLoaded)