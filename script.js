 const button = document.querySelector("button");

    button.addEventListener("click", (ev)=>{
        let button = ev.currentTarget;
  
    let circle = document.createElement("span");
    let diameter = Math.max(button.clientWidth, button.clientHeight);
    let radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${ev.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${ev.clientY - button.offsetTop - radius}px`;
    circle.classList.add("riple");
  
    let ripple = button.getElementsByClassName("riple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
    });
  
  