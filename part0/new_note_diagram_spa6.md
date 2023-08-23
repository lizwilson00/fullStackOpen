---
**NOTE:** 

The following creates a diagram in Mermaid, mermaid.live

---
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The event handler on the submit event is fired.  The event handler does the following:
    Note right of browser: Prevents the default submit behavior 
    Note right of browser: Creates the note in JSON format
    Note right of browser: Creates the note in JSON format and adds it to the notes array
    Note right of browser: Rerenders the note list on the page
    Note right of browser: Sends the new note to the server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: The server creates a new note object and adds it to the notes array
    server-->>browser: HTTP Status Code 201 (Created)
    deactivate server
  