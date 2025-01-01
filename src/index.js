import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

const joke = document.getElementById("joke");
document.addEventListener("DOMContentLoaded", async () => {
    joke.innerHTML = "Loading...";
    joke.innerHTML = await generateJoke();
});

jokeBtn.addEventListener("click", async () => { 
    joke.innerHTML = "Loading...";
    joke.innerHTML = await generateJoke();
});

console.log(process.env.NODE_ENV);
