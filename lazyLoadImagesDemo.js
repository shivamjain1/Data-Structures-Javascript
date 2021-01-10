/* 
    Lazy Loading Images Demo Using InterSection Observer API
*/

// img container
{/* <img class="js-lazy-images" data-src="example.png" /> */}

const images = document.querySelectorAll('.js-lazy-image');
const config = {
    // if the image gets within 50px in the Y axis, start the download
    rootMargin: '50px 0px',
    threshold: 0.01
}

let observer = new IntersectionObserver(onIntersection, config);
images.forEach(image => {
    observer.observe(image);
});

function onIntersection(entries) {
    entries.forEach(entry => {
        // image inside viewport
        if(entry.IntersectionRatio > 0) {
            // stop watching and load the image
            observer.unobserve(entry.target);
            preloadImage(entry.target);
        }
    });
}

// if browser dont support IntersectionObserver, load images immediately
if(!('IntersectionObserver' in window)){
    Array.from(images).forEach(image => preloadImage(image));
} else {
    observer = new IntersectionObserver(onIntersection, config);
    images.forEach(image => {
        observer.observe(image);
    });
}