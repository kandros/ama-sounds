$('ul').on('click', 'button', function() {
  var sound = ($(this).attr('data-sound'));
  var soundPath= './' + sound + '.wav';
  playSound(soundPath)
});

function playSound(soundPath) {
  var audio = new Audio(soundPath);
  audio.currentTime = 0;
  audio.play();
}
