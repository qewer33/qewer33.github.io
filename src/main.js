import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

// window.scrollTo(0, 0); // No idea why intersection observer doesn't trigger when
// window.scrollBy(0, 1);



export default app
