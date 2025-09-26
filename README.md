# 📝 Notes Dashboard App

A lightweight notes dashboard built with **React, Vite, and Material-UI**, featuring rich text editing (TipTap), localStorage persistence, and dark/light theming.

## 🚀 Features

- Dashboard with responsive note grid
- Create, edit, and delete notes
- Rich text editor
- Notes saved in localStorage
- Dark/Light mode (MUI theme)
- Context state management
- Fully responsive layout

## 🛠 Tech Stack

- React (Vite)
- Material UI (MUI) for components & theming
- TailwindCSS utilities (clamp, spacing helpers)
- TipTap for rich text editor
- React Context for state
- LocalStorage persistence
- Vercel deployed

## 📦 Installation

```bash
git clone https://github.com/yourusername/notes-dashboard.git
cd notes-dashboard
npm install
npm run dev


## Steps done while developing

1. Create a Vite + React project
2. Install Tailwind with Vite.
3. Install react router dom
4. Install MUI
5. Create custom hook for using local storage to save and read notes
6. Install tiptap basic packages
7. Implement NoteEditor Component which will be displayed when user tries to edit a note.
8. Basic NoteEditor component built with MUI dialog component. This dialog will have the Tiptap editor in the next step.
9. Add Tipdat editor inside NoteEditor. User can now edit title and content and save.
10. Add delete functionality to delete a note
11. MUI dark and light mode themes supported
12. Notes handling in a custom hook
13. Deployed app in Vercel
```
