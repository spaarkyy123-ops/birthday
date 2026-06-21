import './style.css';

window.onload = () => {
  document.querySelectorAll("img, div").forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1.5s ease";

    setTimeout(() => {
      el.style.opacity = 1;
    }, 200);
  });
}


