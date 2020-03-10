videoPlayEl = document.querySelector('.video-play__img');
videoEl = document.querySelector('.team__video');
peopleImgEl = document.querySelector('.video-play__img');
peopleImgTextEl = document.querySelector('.video-play__img-text');
teamPeopleImg = document.querySelector('.team-people__img');
teamDescriptionEl = document.querySelector('.team-description');

function videoPlayElListener(event) {
    videoEl.style.display = "flex";
    videoPlayEl.style.display = "none";
    peopleImgEl.style.display = "none";
    peopleImgTextEl.style.display = "none";
    teamPeopleImg.style.display = "none";
    videoEl.play();
}

videoPlayEl.addEventListener('click', videoPlayElListener);


function videoElListener(event) {
    console.log(event.target);
    videoEl.style.display = "none";
    teamDescriptionEl.style.display = "flex";
    videoPlayEl.style.display = "flex";
    peopleImgEl.style.display = "flex";
    peopleImgTextEl.style.display = "flex";
    teamPeopleImg.style.display = "flex";
    videoEl.pause();
}

videoEl.addEventListener('click', videoElListener);