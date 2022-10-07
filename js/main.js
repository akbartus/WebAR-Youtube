  // Play
document.querySelector("#playButton").addEventListener("click", function () {
    var iframe = document.querySelector('iframe');
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});
// Pause
document.querySelector("#pauseButton").addEventListener("click", function () {
    var iframe = document.querySelector('iframe');
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
});
// Stop
document.querySelector("#stopButton").addEventListener("click", function () {
    var iframe = document.querySelector('iframe');
    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
});

// On target found
document.querySelector('#example-target').addEventListener("targetFound", event => {
  document.querySelector("#myVid").setAttribute("visible", true);
});


// On target lost
document.querySelector('#example-target').addEventListener("targetLost", event => {
  document.querySelector("#myVid").setAttribute("visible", false);
  var iframe = document.querySelector('iframe');
    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
});
