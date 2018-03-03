/* global $ */

function vibrate(duration) {
    navigator.vibrate(duration);
}

function sendingOutAnSOS() {
    $('#thisIsGonnaSting').prepend('<img src="img/sting.jpg" />');
    navigator.vibrate([100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100]);
}

function getDuration() {
    let duration = document.getElementById('vibrationDurationInput').value;
    let duration2 = $('#vibrationDurationInput').val();
    console.log(duration2);
    console.log(duration);
    return duration;
}

$('#vibrateDurationButton').click(function(event) {
    event.preventDefault();
    let duration = getDuration();
    vibrate(duration);
});
