        function toggleImage(img) {
            const currentSrc = img.src;
            const altSrc = img.getAttribute('data-alt-src');
            
            img.src = altSrc;
            img.setAttribute('data-alt-src', currentSrc);
            
            img.style.transform = 'scale(0.95)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 150);
        }
