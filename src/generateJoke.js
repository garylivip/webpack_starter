import axios from 'axios';

async function generateJoke() {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    return `${response.data.setup} ${response.data.punchline}`;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Failed to fetch a joke.";
  }
}

export default generateJoke;