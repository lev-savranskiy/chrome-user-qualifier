// Save this script as `options.js`

// Saves options to localStorage.


function save_options() {

    var port = getPort().value;
    var select = getSelector();
    var server = select.children[select.selectedIndex].value;

    localStorage["favorite_server"] = server;
    localStorage["favorite_port"] = port;
    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";

    update_text(server, port);
    setTimeout(function () {
        status.innerHTML = "";
    }, 750);
}

function update_text(server, port) {

    var url = port && port.length ? server + ':' + port : server;
    document.getElementById('serverspan').innerHTML = url;
}

function getSelector() {
    return document.getElementById("server");
}

function getPort() {
    return document.getElementById("port");
}


function go_back(server) {
    window.location.href = 'popup.html';

}

// Restores select box state to saved value from localStorage.
function restore_options() {
    var server = localStorage["favorite_server"];
    var port = localStorage["favorite_port"];

    update_text(server, port);
    getPort().value = port;

    var select = getSelector();
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == server) {
            child.selected = "true";
            break;
        }
    }
}


localStorage["favorite_server"] = localStorage["favorite_server"] ? localStorage["favorite_server"] : 'http://localhost';
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
document.querySelector('#back').addEventListener('click', go_back);



