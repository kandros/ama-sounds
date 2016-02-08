$('ul').on('click', 'button', function() {
  var sound = ($(this).attr('data-sound'));
  var soundPath= './sounds/' + sound + '.wav';
  playSound(soundPath)
});

var previousSound;
function playSound(soundPath) {
  if (typeof previousSound !== 'undefined')
	  previousSound.pause();
  var sound = new Audio(soundPath);
  sound.play();
  previousSound = sound;
}
