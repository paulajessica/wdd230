const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const mainli = document.querySelector("section ul li");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000000";
		main.style.color = "#ffffff";
        mainli.style.color = "#ffffff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#ffffff";
		main.style.color = "#000000";
        mainli.style.color = "#333";
		modeButton.textContent = "☑️";
	}
});