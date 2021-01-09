const IS_MOBILE = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const logoWidth = 400;
const logoHeight = 60;
const pixelRatio = 2;
let leon, logoCanvas;

function drawLogo() {
    const canvas = document.createElement('canvas');
    const logo = document.getElementById('animatedLogo');
    let logoText = '';
    if (logo) {
        logoText = logo.getAttribute('text');
        logo.appendChild(canvas);
    }

    logoCanvas = canvas.getContext("2d");
    canvas.width = logoWidth * pixelRatio;
    canvas.height = logoHeight * pixelRatio;
    canvas.style.width = logoWidth + 'px';
    canvas.style.height = logoHeight + 'px';
    logoCanvas.scale(pixelRatio, pixelRatio);
    let size = 49;
    if (IS_MOBILE && logoText.length >= 10) {
        size = 38;
    }

    leon = new LeonSans({
        text: logoText,
        color: ['#fff'],
        size,
        weight: 200
    });

    for (let i = 0; i < leon.drawing.length; i++) {
        TweenMax.fromTo(leon.drawing[i], 1.6, {
            value: 0
        }, {
            delay: i * 0.05,
            value: 1,
            ease: Power4.easeOut
        });
    }

    requestAnimationFrame(animate);
}

function animate() {
    requestAnimationFrame(animate);
    logoCanvas.clearRect(0, 0, logoWidth, logoHeight);

    const x = (logoWidth - leon.rect.w) / 2;
    const y = (logoHeight - leon.rect.h) / 2;

    leon.position(x, y);
    leon.draw(logoCanvas);
}

function isScrolledIntoView(elem) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();
    if (!$(elem).offset()) {
        return;
    }

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();
    return (
        (elemBottom >= docViewTop) &&
        (elemTop <= docViewBottom) &&
        (elemBottom <= docViewBottom) &&
        (elemTop >= docViewTop)
    );
}

function animateChartGroupBars(className) {
    let max = 0;
    $(className)
        .each(function () {
            return max = Math.max(max, $(this).attr('data'));
        })
        .each(function () {
            const $bar = $(this);
            return $bar.css('min-width', '2%').css('width', ($bar.attr('data') / max) * 100 + '%');
        });
}

function drawDiagram(suffix = '') {
    const timeoutsIds = [];

    $('.chart__group' + suffix).each(function (groupIndex) {
        timeoutsIds.push(setTimeout(() => {
            $(this).addClass('chart__group_visible' + suffix);

            if (this.classList.contains('chart__separate1')) {
                return animateChartGroupBars('.chart__separate1 .chart__bar' + suffix);
            }

            if (this.classList.contains('chart__separate2')) {
                return animateChartGroupBars('.chart__separate2 .chart__bar' + suffix);
            }

            animateChartGroupBars(`.chart__group_visible`+ suffix + `.chart__separate .chart__bar` + suffix);
        }, 2700 * groupIndex));
    });

    return () => {
        timeoutsIds.forEach(timeoutId => clearTimeout(timeoutId));
        $('.chart__group_visible' + suffix).removeClass('chart__group_visible' + suffix);
        $('.chart__bar' + suffix).css('width', 0).css('min-width', 0);
    };
}

function drawChart(suffix = '') {
    let resetDiagram = drawDiagram(suffix);

    if(IS_MOBILE) {
        $('.chart__bar' + suffix).css('max-width', '97%');
        return; // disable animation on scroll for mobile devices
    }

    $('.content').scroll(function () {
        const inView =
            isScrolledIntoView($(`.chart__series` + suffix + `:last`)) ||
            isScrolledIntoView($(`.chart__series` + suffix + `:first`));

        if (!inView && resetDiagram) {
            resetDiagram(suffix);
            resetDiagram = null;
        }
        if (inView && !resetDiagram) {
            resetDiagram = drawDiagram(suffix);
        }
    });
}

window.onload = () => {
    drawLogo();
    const animationTimeout = IS_MOBILE ? 0 : 400;

    setTimeout(() => {
        drawChart();
    }, animationTimeout); // Wait show animation

    setTimeout(() => {
        drawChart('-second');
    }, animationTimeout); // Wait show animation
};


