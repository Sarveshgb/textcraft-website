// script.js
document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    let undoStack = [];
    let redoStack = [];

    document.getElementById('font-family').addEventListener('change', function() {
        editor.style.fontFamily = this.value;
    });

    document.getElementById('font-color').addEventListener('input', function() {
        editor.style.color = this.value;
    });

    document.getElementById('font-size').addEventListener('input', function() {
        editor.style.fontSize = this.value + 'px';
    });

    document.getElementById('undo').addEventListener('click', function() {
        if (undoStack.length) {
            redoStack.push(editor.innerHTML);
            editor.innerHTML = undoStack.pop();
        }
    });

    document.getElementById('redo').addEventListener('click', function() {
        if (redoStack.length) {
            undoStack.push(editor.innerHTML);
            editor.innerHTML = redoStack.pop();
        }
    });

    document.getElementById('add-text').addEventListener('click', function() {
        const newText = prompt("Enter new text:");
        if (newText) {
            editor.innerHTML += `<p>${newText}</p>`;
        }
    });

    editor.addEventListener('input', function() {
        undoStack.push(editor.innerHTML);
        redoStack = []; // Clear redo stack on new input
    });
});


