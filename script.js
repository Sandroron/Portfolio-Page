      const modal = document.getElementsByClassName('idMyModal');
      const img = document.getElementsByClassName('zoomable');
      const modalImg = document.getElementsByClassName('modal-content');
      for ( let i = 0; i < img.length; i++ ) {
        img[i].onclick = function () {
          modal[i].style.display = "flex";
          modalImg[i].src = this.src;
        }
      }
      
      var span = document.getElementsByClassName("close");
      for ( let i = 0; i < span.length; i++ ) {
        span[i].onclick = function() { 
          modal[i].style.display = "none";
        }
      }
      
      // Navigation

      const doc = document;
      const menuOpen = doc.querySelector(".menu-js-action");
      const menuClose = doc.querySelector(".close-js-action");
      const menuContact = doc.querySelector(".contact-js-action");
      const overlay = doc.querySelector(".overlay");

      menuOpen.addEventListener("click", () => {
        overlay.classList.add("overlay--active");
      });

      menuClose.addEventListener("click", () => {
        overlay.classList.remove("overlay--active");
      });

      menuContact.addEventListener("click", () => {
        overlay.classList.remove("overlay--active");
      });

      // Scrollable Screenshot

      (function() {
        var cursorYPos, cursorXPos;
        var cursorDown = false;
        var scrollTop = 0;

        const content = document.getElementById('scrollable-div')
        const interactiveArea = document.getElementById('scrollable-div--interactive');
        const hint = document.getElementById('scrollable-div__child__hint');

        interactiveArea?.addEventListener('mousemove', function(mouseEvent) { 
          if (cursorDown) {
            content.scrollTop = scrollTop + cursorYPos - mouseEvent.pageY;
          }
        });

        interactiveArea?.addEventListener('mousedown', function(mouseEvent) { 

          if (cursorDown == false) {

            var opacity = getComputedStyle(hint).getPropertyValue('opacity'); 
                  var intervalID = setInterval(function() { 
          
                    if (opacity > 0) { 
                      opacity = opacity - 0.05 
                      hint.style.opacity = opacity; 
                } 
            }, 20); 
          }

          cursorYPos = mouseEvent.pageY; 
          cursorXPos = mouseEvent.pageX; 
          cursorDown = true; 
        });

        window.addEventListener('mouseup', function(mouseEvent) { 
          cursorDown = false; 
          scrollTop = content?.scrollTop ?? 0;
        });
      })()