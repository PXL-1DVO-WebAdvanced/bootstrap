console.log('application is ready to go!');

// document.getElementById("img-html").addEventListener("click", imageClick);
document.querySelectorAll(".logo").forEach(element => {
    element.addEventListener("click", imageClick);
});


function imageClick(event) {
    console.log("click:", event);

    let img = event.target;
    let cardContainer = img.parentElement;
    let progressBar = cardContainer.querySelector(".progress-bar");

    if (!progressBar) return;

    let progress = parseInt(progressBar.getAttribute('aria-valuenow'));

    progress += 25;

    if (progress > 100)
    {
        progress = 0;
    }

    progressBar.classList.remove("bg-danger");
    progressBar.classList.remove("bg-warning");
    progressBar.classList.remove("bg-info");
    progressBar.classList.remove("bg-succes");

    progressBar.classList.remove("w-25");
    progressBar.classList.remove("w-50");
    progressBar.classList.remove("w-75");
    progressBar.classList.remove("w-100");

    switch(progress) {
        case 25:
            progressBar.classList.add("w-25");
            progressBar.classList.add("bg-danger");
            break;
        case 50:
            progressBar.classList.add("w-50");
            progressBar.classList.add("bg-warning");
            break;
        case 75:
            progressBar.classList.add("w-75");
            progressBar.classList.add("bg-info");
            break;
        case 100:
            progressBar.classList.add("w-100");
            progressBar.classList.add("bg-succes");
            break;
    }

    progressBar.setAttribute('aria-valuenow', progress);
    progressBar.innerHTML = progress;
}