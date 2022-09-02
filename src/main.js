import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

const observer = new IntersectionObserver((e) => {
    for (let i = 0; i < e.length; i++) {
        if (e[i].isIntersecting) setTimeout(() => {
            console.log(e[i].target.nodeName)
            e[i].target.classList.add("animated");
        }, i * 350);
    };
});

document.querySelectorAll('[data-animate]').forEach((e) => observer.observe(e));

export default app
