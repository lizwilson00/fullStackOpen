---
**NOTE:** 

The following creates a diagram in Mermaid, mermaid.live

---
[![](https://mermaid.ink/img/pako:eNq9VEtv2zAM_iuETh2QOG1686GXbdgw9IUlO83FwEh0rNaWPIlOGwT576NstxjWbVj20k18fPz4geROaW9I5SrS546cplcW1wGbwoG8FgNbbVt0DKvg7yOF5w4xbpJ98Ixh07OzwZ7D9dViCRVzG_PZLHJnLMVMx6yiOlp3Z7PSzugBm7YmbNuZo_tPzjMNcKjZbpDpqUoyXoobaioZfAmPZZbVYxDoQJISAUHAIIGBX92SZkBnAI2JYBnYA0tOcktoCLgd0AeQqXQw9pLD2-XyGhaM3EV4KXrB6fEcjj68P4dAxgZBfjHkGnpG-EeyvHl9kCqJ5U8k-S7pi3MwXncNOf7H9Bq0TtwHMkzySxKUtqb_QfD2N_i9ww0udLAt_wrNfjKDXVf9aD4BpdkcPxBZdicCPZDu2Lr1t1XSPooNpR6xrmQ2-4DF1SWUwTf97-9qY5BRtPHuMHU-7qCQ6-E4jZfK5dNPnJXeMG4LNRGLQNPgmx_PT6cn05NCwX4CWZbBzZ9rOYg4SqSxrleo76DsnCB6N6gYyBkK8atdP7JO1yLKqL3ciHqbrgKZPqBfZTVRDQWZGiO3cZcshZLgZuzGUIldLW0Xbi-h2LFfbJ1WOYeOJqprU-PjKVV5iXUUq5wK9uFiuLf92d1_AQVP6Z0?type=png)](https://mermaid.live/edit#pako:eNq9VEtv2zAM_iuETh2QOG1686GXbdgw9IUlO83FwEh0rNaWPIlOGwT576NstxjWbVj20k18fPz4geROaW9I5SrS546cplcW1wGbwoG8FgNbbVt0DKvg7yOF5w4xbpJ98Ixh07OzwZ7D9dViCRVzG_PZLHJnLMVMx6yiOlp3Z7PSzugBm7YmbNuZo_tPzjMNcKjZbpDpqUoyXoobaioZfAmPZZbVYxDoQJISAUHAIIGBX92SZkBnAI2JYBnYA0tOcktoCLgd0AeQqXQw9pLD2-XyGhaM3EV4KXrB6fEcjj68P4dAxgZBfjHkGnpG-EeyvHl9kCqJ5U8k-S7pi3MwXncNOf7H9Bq0TtwHMkzySxKUtqb_QfD2N_i9ww0udLAt_wrNfjKDXVf9aD4BpdkcPxBZdicCPZDu2Lr1t1XSPooNpR6xrmQ2-4DF1SWUwTf97-9qY5BRtPHuMHU-7qCQ6-E4jZfK5dNPnJXeMG4LNRGLQNPgmx_PT6cn05NCwX4CWZbBzZ9rOYg4SqSxrleo76DsnCB6N6gYyBkK8atdP7JO1yLKqL3ciHqbrgKZPqBfZTVRDQWZGiO3cZcshZLgZuzGUIldLW0Xbi-h2LFfbJ1WOYeOJqprU-PjKVV5iXUUq5wK9uFiuLf92d1_AQVP6Z0)
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: The server creates a new note object and adds it to the notes array
    server-->>browser: HTTP Status Code 302 (URL redirect)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes (including the newly added note)
  