const notesData = [
    {
      id: 'notes-jT-jjsyz61J8XKiI',
      title: 'Welcome to Notes, Dimas!',
      body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
      createdAt: '2022-07-28T10:03:12.594Z',
      archived: false,
    },
    {
      id: 'notes-aB-cdefg12345',
      title: 'Meeting Agenda',
      body: 'Discuss project updates and assign tasks for the upcoming week.',
      createdAt: '2022-08-05T15:30:00.000Z',
      archived: false,
    },
    {
      id: 'notes-XyZ-789012345',
      title: 'Shopping List',
      body: 'Milk, eggs, bread, fruits, and vegetables.',
      createdAt: '2022-08-10T08:45:23.120Z',
      archived: false,
    },
    {
      id: 'notes-1a-2b3c4d5e6f',
      title: 'Personal Goals',
      body: 'Read two books per month, exercise three times a week, learn a new language.',
      createdAt: '2022-08-15T18:12:55.789Z',
      archived: false,
    },
    {
      id: 'notes-LMN-456789',
      title: 'Recipe: Spaghetti Bolognese',
      body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
      createdAt: '2022-08-20T12:30:40.200Z',
      archived: false,
    },
    {
      id: 'notes-QwErTyUiOp',
      title: 'Workout Routine',
      body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
      createdAt: '2022-08-25T09:15:17.890Z',
      archived: false,
    },
    {
      id: 'notes-abcdef-987654',
      title: 'Book Recommendations',
      body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
      createdAt: '2022-09-01T14:20:05.321Z',
      archived: false,
    },
    {
      id: 'notes-zyxwv-54321',
      title: 'Daily Reflections',
      body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
      createdAt: '2022-09-07T20:40:30.150Z',
      archived: false,
    },
    {
      id: 'notes-poiuyt-987654',
      title: 'Travel Bucket List',
      body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
      createdAt: '2022-09-15T11:55:44.678Z',
      archived: false,
    },
    {
      id: 'notes-asdfgh-123456',
      title: 'Coding Projects',
      body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
      createdAt: '2022-09-20T17:10:12.987Z',
      archived: false,
    },
    {
      id: 'notes-5678-abcd-efgh',
      title: 'Project Deadline',
      body: 'Complete project tasks by the deadline on October 1st.',
      createdAt: '2022-09-28T14:00:00.000Z',
      archived: false,
    },
    {
      id: 'notes-9876-wxyz-1234',
      title: 'Health Checkup',
      body: 'Schedule a routine health checkup with the doctor.',
      createdAt: '2022-10-05T09:30:45.600Z',
      archived: false,
    },
    {
      id: 'notes-qwerty-8765-4321',
      title: 'Financial Goals',
      body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
      createdAt: '2022-10-12T12:15:30.890Z',
      archived: false,
    },
    {
      id: 'notes-98765-54321-12345',
      title: 'Holiday Plans',
      body: 'Research and plan for the upcoming holiday destination.',
      createdAt: '2022-10-20T16:45:00.000Z',
      archived: false,
    },
    {
      id: 'notes-1234-abcd-5678',
      title: 'Language Learning',
      body: 'Practice Spanish vocabulary for 30 minutes every day.',
      createdAt: '2022-10-28T08:00:20.120Z',
      archived: false,
    },
  ];

  class AppHeader extends HTMLElement {
      constructor() {
          super();
          this.attachShadow({ mode: 'open' });
      }

      connectedCallback() {
          this.render();
      }

      render() {
          this.shadowRoot.innerHTML = `
              <style>
                  header {
                      background: #2563eb;
                      color: white;
                      padding: 1rem;
                      text-align: center;
                      margin-bottom: 2rem;
                  }
                  h1 {
                      margin: 0;
                      font-size: 1.8rem;
                  }
              </style>
              <header>
                  <h1>Notes App</h1>
              </header>
          `;
      }
  }
  customElements.define('app-header', AppHeader);

  class NoteForm extends HTMLElement {
      constructor() {
          super();
          this.attachShadow({ mode: 'open' });
      }

      connectedCallback() {
          this.render();
          this.setupValidation();
      }

      render() {
          this.shadowRoot.innerHTML = `
              <style>
                  .form-container {
                      background: white;
                      padding: 20px;
                      border-radius: 8px;
                      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                      margin-bottom: 20px;
                  }
                  .form-group {
                      margin-bottom: 15px;
                  }
                  label {
                      display: block;
                      margin-bottom: 5px;
                      color: #333;
                  }
                  input, textarea {
                      width: 100%;
                      padding: 8px;
                      border: 1px solid #ddd;
                      border-radius: 4px;
                      font-size: 16px;
                  }
                  textarea {
                      min-height: 100px;
                      resize: vertical;
                  }
                  button {
                      background: #2563eb;
                      color: white;
                      border: none;
                      padding: 10px 20px;
                      border-radius: 4px;
                      cursor: pointer;
                      font-size: 16px;
                  }
                  button:hover {
                      background: #1d4ed8;
                  }
                  .error {
                      color: red;
                      font-size: 14px;
                      margin-top: 5px;
                      display: none;
                  }
              </style>
              <div class="form-container">
                  <form id="noteForm">
                      <div class="form-group">
                          <label for="title">Title</label>
                          <input type="text" id="title" required minlength="3">
                          <div class="error" id="titleError">Title must be at least 3 characters</div>
                      </div>
                      <div class="form-group">
                          <label for="body">Note Content</label>
                          <textarea id="body" required minlength="10"></textarea>
                          <div class="error" id="bodyError">Content must be at least 10 characters</div>
                      </div>
                      <button type="submit">Add Note</button>
                  </form>
              </div>
          `;
      }

      setupValidation() {
          const form = this.shadowRoot.querySelector('#noteForm');
          const titleInput = this.shadowRoot.querySelector('#title');
          const bodyInput = this.shadowRoot.querySelector('#body');
          const titleError = this.shadowRoot.querySelector('#titleError');
          const bodyError = this.shadowRoot.querySelector('#bodyError');

          titleInput.addEventListener('input', () => {
              if (titleInput.value.length < 3) {
                  titleError.style.display = 'block';
              } else {
                  titleError.style.display = 'none';
              }
          });

          bodyInput.addEventListener('input', () => {
              if (bodyInput.value.length < 10) {
                  bodyError.style.display = 'block';
              } else {
                  bodyError.style.display = 'none';
              }
          });

          form.addEventListener('submit', (e) => {
              e.preventDefault();
              if (form.checkValidity()) {
                  const newNote = {
                      id: `notes-${Date.now()}`,
                      title: titleInput.value,
                      body: bodyInput.value,
                      createdAt: new Date().toISOString(),
                      archived: false
                  };
                  const event = new CustomEvent('note-created', {
                      detail: newNote,
                      bubbles: true,
                      composed: true
                  });
                  this.dispatchEvent(event);
                  form.reset();
              }
          });
      }
  }
  customElements.define('note-form', NoteForm);

  class NoteCard extends HTMLElement {
      constructor() {
          super();
          this.attachShadow({ mode: 'open' });
      }

      static get observedAttributes() {
          return ['title', 'body', 'created-at'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
          if (oldValue !== newValue) {
              this.render();
          }
      }

      render() {
          const title = this.getAttribute('title');
          const body = this.getAttribute('body');
          const createdAt = new Date(this.getAttribute('created-at')).toLocaleDateString();

          this.shadowRoot.innerHTML = `
              <style>
                  .note-card {
                      background: white;
                      padding: 15px;
                      border-radius: 8px;
                      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  }
                  h3 {
                      margin: 0 0 10px 0;
                      color: #1a365d;
                  }
                  p {
                      margin: 0;
                      color: #4a5568;
                      white-space: pre-line;
                  }
                  .date {
                      margin-top: 10px;
                      font-size: 0.9em;
                      color: #718096;
                  }
              </style>
              <div class="note-card">
                  <h3>${title}</h3>
                  <p>${body}</p>
                  <div class="date">Created: ${createdAt}</div>
              </div>
          `;
      }
  }
  customElements.define('note-card', NoteCard);

  document.addEventListener('DOMContentLoaded', () => {
      const notesContainer = document.getElementById('notesContainer');

      function renderNotes() {
          notesContainer.innerHTML = '';
          notesData.forEach(note => {
              const noteCard = document.createElement('note-card');
              noteCard.setAttribute('title', note.title);
              noteCard.setAttribute('body', note.body);
              noteCard.setAttribute('created-at', note.createdAt);
              notesContainer.appendChild(noteCard);
          });
      }

      document.addEventListener('note-created', (e) => {
          notesData.unshift(e.detail);
          renderNotes();
      });

      renderNotes();
  });