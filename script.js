const startButton = document.getElementById("startButton");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

startButton.addEventListener("click", () => {

    welcome.classList.add("hidden");

    setTimeout(() => {

        mainContent.classList.add("visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

});
