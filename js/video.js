var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("video.video");
	video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	updateVolumeDisplay();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	updateVolumeDisplay();
});

function updateVolumeDisplay() {
    let volumeSpan = document.querySelector("#volume");
    volumeSpan.textContent = (video.volume * 100) + "%";
}

window.addEventListener("load", function() {
    updateVolumeDisplay();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("The new speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }

    console.log("Current time of the video: " + video.currentTime + " seconds");
});

document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
    if (video.muted) {
        this.textContent = "Unmute";  // Change button text to "Unmute"
    } else {
        this.textContent = "Mute";  // Change button text back to "Mute"
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;

    document.querySelector("#volume").textContent = this.value + "%";
});

let videoElement = document.querySelector(".video");

document.querySelector("#vintage").addEventListener("click", function() {
    videoElement.classList.add("oldSchool"); 
});

document.querySelector("#orig").addEventListener("click", function() {
    videoElement.classList.remove("oldSchool"); 
});