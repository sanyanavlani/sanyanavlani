var textWrapper = document.querySelector('.about2');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            anime.timeline({ loop: false })
                .add({
                    targets: '.about2 .letter',
                    opacity: [0, 1],
                    easing: "easeInOutQuad",
                    duration: 2250,
                    delay: (el, i) => 30 * (i + 1)
                })