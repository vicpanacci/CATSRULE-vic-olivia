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