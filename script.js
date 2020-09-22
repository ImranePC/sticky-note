const board = document.getElementById('board');
const inputLine = document.getElementById('inputAddNote');
const pinList = ["pin_red", "pin_orange", "pin_yellow", "pin_green", "pin_blue", "pin_purple", "pin_white"]
var noteId = 0;

inputLine.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        if (document.getElementById('inputAddNote').value != "") {
            addNote();
        }
    }
});

function addLine(id) {
    let targetId = "notecontent" + id;
    let inputId = "inputnote" + id;
    let lineText = document.getElementById(inputId).value;

    if (lineText != "") {
        let noteContent = document.createElement('p');
        noteContent.textContent = lineText;
        document.getElementById(targetId).appendChild(noteContent);
        document.getElementById(inputId).value = "";
    }
};

function deleteNote(id) {
    selectedNote = document.getElementById(id);
    selectedNote.classList.add('throwout');
    setTimeout(
        function() {
            selectedNote.parentNode.removeChild(selectedNote);
        }, 500
    );
}

function addNote() {
    let noteLine = document.getElementById('inputAddNote').value;
    
    if (noteLine != "") {
    
    //Clear input
    document.getElementById('inputAddNote').value = "";
    //Increment note amount
    noteId += 1;

    //Create note element
    let newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.id = noteId;
    
    ////Top part
    let topNote = document.createElement('div');
    topNote.classList.add('top-note');

    let crossbox = document.createElement('div');
    crossbox.classList.add('cross');

    let deleteBtn = document.createElement('button');
    deleteBtn.classList = "btn-note btn-cross"
    deleteBtn.innerHTML = "<i class='fas fa-times fa-lg'></i>";
    deleteBtn.onclick = function () { deleteNote(newNote.id); };
    
    let pin = document.createElement('div');
    pin.classList.add('pin');
    
    let imgPin = document.createElement('img');
    let randomImg = pinList[Math.floor(Math.random() * pinList.length)];
    imgPin.src = "img/" + randomImg + ".png";
    let randomNumber = Math.floor(Math.random() * 360) + 1;
    
    ////Note Content
    let noteContent = document.createElement('div');
    noteContent.classList.add('note-content');
    noteContent.id = 'notecontent' + noteId;

    let noteContentp = document.createElement('p');
    noteContentp.textContent = noteLine;
    
    ////Bottom part
    let option = document.createElement('div');
    option.classList.add('option');
    
    let inputNote = document.createElement('input');
    inputNote.type = 'text';
    inputNote.id = 'inputnote' + noteId;

    let addnoteBtn = document.createElement('button');
    addnoteBtn.onclick = function () { addLine(newNote.id); }
    addnoteBtn.classList.add('btn-note');
    addnoteBtn.innerHTML = "<i class='fas fa-check-square fa-2x'></i>";
    addnoteBtn.placeholder = "...";

    //Append all
    crossbox.appendChild(deleteBtn);
    topNote.appendChild(crossbox);

    pin.appendChild(imgPin);      
    topNote.appendChild(pin);

    option.appendChild(inputNote);
    option.appendChild(addnoteBtn);

    noteContent.appendChild(noteContentp)

    newNote.appendChild(topNote);
    newNote.appendChild(noteContent);
    newNote.appendChild(option);

    //Add to board
    board.appendChild(newNote);
    } else {
        document.getElementById('inputAddNote').focus();
    }
}