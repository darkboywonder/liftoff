import Slides from './lesson_five.svelte'
import '@styles/tailwind.css'

const app = new Slides({
	target: document.getElementById('app'),
})

export default app
