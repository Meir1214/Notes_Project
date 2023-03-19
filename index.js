function createNote() {
    const taskText = document.getElementById('task-text').value;
    const targetDate = document.getElementById('target-date').value;
    const targetTime = document.getElementById('target-time').value;    
  
    if (!taskText || !targetDate || !targetTime) {
      alert('Please fill out the text.');
      return;
    }
    const notes = {
        taskText: taskText,
        targetDate: targetDate,
        targetTime: targetTime,
      };
      localStorage.setItem('notes', JSON.stringify("notes"));

    const note = document.createElement('div');
    note.classList.add('note');
  
    const noteHeader = document.createElement('div');
    noteHeader.classList.add('note-header');
  
    const noteDate = document.createElement('span');
    noteDate.classList.add('note-date');
    noteDate.textContent = targetDate;
    noteHeader.appendChild(noteDate);
  
    const noteTime = document.createElement('span');
    noteTime.classList.add('note-time');
    noteTime.textContent = targetTime;
    noteHeader.appendChild(noteTime);
  
    note.appendChild(noteHeader);
  
    const noteBody = document.createElement('div');
    noteBody.classList.add('note-body');
  
    const noteText = document.createElement('p');
    noteText.classList.add('note-text');
    noteText.textContent = taskText;
    noteBody.appendChild(noteText);
  
    note.appendChild(noteBody);
  
    document.body.appendChild(note);
  
    
    document.getElementById('task-text').value = '';
    document.getElementById('target-date').value = '';
    document.getElementById('target-time').value = '';
}
