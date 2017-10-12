function init() {
    let btn = document.getElementById('start');

    btn.addEventListener('click', function() {

        action(btn);

    }, false);

    // btn.addEventListener('click', action, false);
}
init();

function addToList(item) {

    let ol = document.getElementById('ol');
    let newListItem = document.createElement('li');
    let newListText = document.createTextNode(item);
    newListItem.appendChild(newListText);
    ol.appendChild(newListItem);

}

function switchValue (value) {
    return value == 'start' ? 'stop' : 'start';
}

let timeLogged = (function (btn) {

    let timeObject = {
        started: 0,
        ended: 0
    };

    return {
        timeToSet: function (btn) {
            if (btn.value == 'start') {
                timeObject.started = Date.now();
            } else {
                timeObject.ended = Date.now();
            }
        },
        value: function (btn) {
            return timeObject;
        }
    }

}) ();

function action (btn) {

    timeLogged.timeToSet(btn);

    if (btn.value == 'stop') {
        let message = timeLogged.value(btn);

        addToList((message.ended - message.started));
    }

    let value = switchValue(btn.value);
    btn.value = value;
    btn.innerHTML = value;

}


