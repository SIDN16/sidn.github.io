







//Slide work gallery

$(document).ready(function () {
    let currentWorkSlide = 0;

    function changeWorkSlide(direction) {
        const workSlides = $('#work-gallery .workslides');
        const workTextContainer = $('#work-gallery .work-text-container');
        const totalWorkSlides = workSlides.children().length;

        currentWorkSlide = (currentWorkSlide + direction + totalWorkSlides) % totalWorkSlides;
        const translateWorkValue = -currentWorkSlide * 100 + '%';

        workSlides.css('transform', 'translateX(' + translateWorkValue + ')');

        // change the text with slides
        const textContent = getTextContentForSlide(currentWorkSlide);
        workTextContainer.html('<p>' + textContent + '</p>');
    }

    // prev and next buttons
    $('#work-gallery .prev').click(() => changeWorkSlide(-1));
    $('#work-gallery .next').click(() => changeWorkSlide(1));

    // text content for each slide 
    function getTextContentForSlide(slideIndex) {
        const textContentArray = [
            "During my inaugural internship, I crafted a dynamic t-shirt design that seamlessly integrates the company's branding on the front. On the back, a vibrant collage of graphics and icons embodies the spirit of 'Gen-Z,' featuring trendy elements and slangs like 'stress insomnia keep cool and caffeine.' Adding an interactive touch, a QR code unveils a delightful surprise when scanned. This tee is a perfect fit for the Gen-Z audience, capturing their energy and incorporating elements that resonate with their unique lifestyle.",
            'I have designed a unique T-shirt design featuring the branding on the front, adorned with a captivating pattern. The back showcases the word "Limitless," where the "ss" is replaced with an infinity symbol, symbolizing boundless potential for the wearer. Additionally, the design incorporates a mesmerizing wireframe representation of singularity. This intricate fusion of elements communicates the concept that individuals donning this shirt are limitless, suggesting a profound connection between the wearer and the infinite possibilities represented by singularities. This design is a testament to my creative vision and ability to convey abstract concepts through visual storytelling.',
            "I designed a unique mousepad by seamlessly combining letters from both Hindi and English languages, forming an artistic representation of the iconic Nike quote, 'Just Do It.' This creation celebrates linguistic diversity and the fusion of cultural elements in a visually captivating way.",
            "I created a custom font on graph paper to redesign Nike's shoe box packaging. The bespoke font, inspired by Nike's dynamic spirit, seamlessly integrates into the design, telling a story through its strokes and curves. The revamped box goes beyond functionality, becoming a visual representation of Nike's ethos and inviting a deeper connection with the brand.",
            "The title treatment for 'The White Tiger' captivates the upper part of the book cover with a dynamic integration of tiger claws slicing through the title and cover. This creative design imparts a metaphorical 'tear,' symbolizing the disruptive and transformative force represented by the white tiger within the narrative. In the lower section, prominent Delhi landmarks take center stage, serving as a visual anchor that informs readers about the story's setting. These iconic structures not only establish a sense of place but also underscore the significance of Delhi in the unfolding narrative, contributing to the overall visual narrative of the book cover.",
            'The title treatment for "Gone Girl" undergoes two impactful alterations that enhance its visual impact. The replacement of the letter "o" in "Gone" with a camera icon symbolizes the intrusive lens of the media, underscoring its pivotal role in the narrative. Concurrently, the substitution of the letter "i" in "Girl" with a silhouette of a man alludes to Nick, a central character, and hints at the intricate dynamics within the story. Further intensifying the visual narrative, the lower half of the book cover features subtle visual clues adorned with strategically placed blood spatters, establishing an ominous tone that promises a gripping blend of crime, thriller, and mystery, inviting readers into a suspenseful reading experience.',
        
            // more text content 
        ];

        return textContentArray[slideIndex];
    }
});

















// // Overlay

// document.querySelectorAll('.overlay-trigger').forEach(function (trigger) {
//     trigger.addEventListener('click', function () {
//         openOverlay(trigger.querySelector('img').src, trigger.getAttribute('data-text'));
//     });
// });

// function openOverlay(imageSrc, altText) {
//     var overlay = document.getElementById('p-overlay');
//     var overlayImage = document.getElementById('p-overlay-image');
//     var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

//     // current scroll position
//     var scrollPosition = window.scrollY;

//     // Hide the scrollbar
//     if (scrollbarWidth > 0) {
//         document.body.style.paddingRight = scrollbarWidth + 'px';
//     }

    
//     overlayImage.src = imageSrc;
//     overlayImage.alt = altText;

//     // opening animation
//     overlay.style.transition = 'opacity 0.5s';
//     overlay.style.display = 'flex';

//     // prevent scrolling
//     document.body.classList.add('overlay-open');

//     setTimeout(() => {
//         overlay.style.opacity = '1';
//     }, 10);

//     // scroll position after the overlay is opened
//     window.scrollTo(0, scrollPosition);
// }

// function closeOverlay() {
//     var overlay = document.getElementById('p-overlay');

//     var scrollPosition = window.scrollY;

//     // closing animation
//     overlay.style.transition = 'opacity 0.5s';
//     overlay.style.opacity = '0';

//     setTimeout(() => {
//         // allow scrolling
//         document.body.classList.remove('overlay-open');

      
//         overlay.style.display = 'none';

//         // body's padding and overflow when closing the overlay
//         document.body.style.overflow = 'auto';
//         document.body.style.paddingRight = '0';
//         window.scrollTo(0, scrollPosition);
//     }, 500); // 
// }

















// Scroll to top button








let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





//Typewriter effect






const typedTextElement = document.getElementById('typed-text');
const triggerSection = document.getElementById('trigger-section');

// check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// start the typewriter effect
function startTypewriter() {
    const textContent = typedTextElement.textContent;
    const textArray = textContent.split('');

    typedTextElement.textContent = '';

    textArray.forEach((char, index) => {
        setTimeout(() => {
            typedTextElement.textContent += char;

            if (index === textArray.length - 1) {
                typedTextElement.innerHTML += '<span class="blink">&nbsp;</span>';
            }
        }, index * 3); // the delay in milliseconds
    });

    // Show the text
    typedTextElement.style.opacity = 1;
}

window.onscroll = function () {
    if (isInViewport(triggerSection)) {
        startTypewriter();
        window.onscroll = null;
    }
};

