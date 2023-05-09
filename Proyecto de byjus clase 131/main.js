function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }
  function modelLoaded() {
    console.log('¡Modelo cargado!');
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}
var synth = window.speechSynthesis; speak_data = 'Object detected is - '+results[0].label; var utterThis = new SpeechSynthesisUtterance(speak_data); synth.speak(utterThis);