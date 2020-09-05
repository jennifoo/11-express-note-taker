# Note Taker using the Express Node Module

## Description

This application can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

### Link to view deployed application
* [Heroku Link](https://jennifoo-express-note-taker.herokuapp.com/)

### Preview
<img src ="./express-note-taker.png" alt="express note taker application">

## Requirements

* Build backend to connect existing front-end code.
* GET `/notes` - Should return the `notes.html` file.
* GET `*` - Should return the `index.html` file
* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes created:

  * GET `/api/notes` - reads the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  ## User Story

  AS A user, I want to be able to write and save notes
  I WANT to be able to delete notes I've written before
  SO THAT I can organize my thoughts and keep track of tasks I need to complete

  ## Business Context

  For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

  ## Acceptance Criteria

  Application should allow users to create and save notes.
  Application should allow users to view previously saved notes.
  Application should allow users to delete previously saved notes.

  ## Deploying the App

  This app should be deployed on Heroku.
