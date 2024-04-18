const placeholder = document.createElement('h1')
placeholder.innerHTML = "Something went wrong"
const el = document.getElementById("map") || placeholder;

export const createdElement = document.getElementById("map") || placeholder;
