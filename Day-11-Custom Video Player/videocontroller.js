(function() {
  /* Get All Elements */
  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress__filled');
  const toggle = player.querySelector('.toggle');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll('.player__slider');;
  const fullScreenBtn = player.querySelector('.fullscreen__button');

  const fullscreenEnabled = video.webkitFullscreenEnabled ||
    video.mozFullScreenEnabled || video.msFullscreenEnabled;
  let requestFullScreenFunc = video.webkitRequestFullscreen ||
    video.mozRequestFullScreen || video.msRequestFullscreen;
    requestFullScreenFunc = requestFullScreenFunc.bind(video);
  let exitFullscreenFunc = video.webkitExitFullscreen ||
    video.mozCancelFullScreen || video.msExitFullscreen || '';
    exitFullscreenFunc = exitFullscreenFunc && exitFullscreenFunc.bind(video);

  /* Build out functions */
  function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
  }

  function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
  }

  function handleRangeUpdate() {
    // playbackRate or volume
    video[this.name] = this.value;
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  /* Hook up the event listners */
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);

  toggle.addEventListener('click', togglePlay);
  skipButtons.forEach(button => button.addEventListener('click', skip));
  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

  let mousedown = false;
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);
  fullScreenBtn.addEventListener('click', () => {
    if (!fullscreenEnabled) {
        requestFullScreenFunc();
    } else if (exitFullscreenFunc) {
        exitFullscreenFunc(); 
    }
  });

})();