---
**NOTE:** 

The following creates a diagram in Mermaid, mermaid.live

---
[![](https://mermaid.ink/img/pako:eNqlU81q3EAMfhUxpxaS3bZHH3JJD6XQJNQ-GoLWI6-V2DPTGXm3IeTdK3vsbUvCUqhPRtL3I2n0bBpvyRQm0Y-RXEOfGfcRh9qBfgGjcMMBncAu-mOi-DqhwcMUz5kbLwSR952Ab1dQAVVHQAfS8g6d7SmCdyAaTONuYFlynKDlSHYDbwCspzRDWt_3_shuX5yVvIszPmMstTj2ssrtqMMD-whnGa4joSyibiphB1_L2xt1EAeU_8GCNgVobQJ1I_5UlgBjxKez1N8pkrMU_yDvOck60YB7OosvFb1g6Zjxi4N1lRN4Kb-8uspRHehtWUEnElKx3SYZLVPaNGnTUZ_YPfKm5S39xCH0hCFslfx-Ir9PATMlNsIHncpfOrPJntrZ4ypVncxAswwSf7v1uwdq_m2EmeRSuzi1_6Wq7qAUlDHBtT5--PThI7zL-7LvM8zSG17NhRlIl8dW7-V5itRGRQeqTaG_yxOrTe1etBRH8eWTa0whcaQLMwardMt5maLFPmmULIuP3_INzqf48gs1cj7k?type=png)](https://mermaid.live/edit#pako:eNqlU81q3EAMfhUxpxaS3bZHH3JJD6XQJNQ-GoLWI6-V2DPTGXm3IeTdK3vsbUvCUqhPRtL3I2n0bBpvyRQm0Y-RXEOfGfcRh9qBfgGjcMMBncAu-mOi-DqhwcMUz5kbLwSR952Ab1dQAVVHQAfS8g6d7SmCdyAaTONuYFlynKDlSHYDbwCspzRDWt_3_shuX5yVvIszPmMstTj2ssrtqMMD-whnGa4joSyibiphB1_L2xt1EAeU_8GCNgVobQJ1I_5UlgBjxKez1N8pkrMU_yDvOck60YB7OosvFb1g6Zjxi4N1lRN4Kb-8uspRHehtWUEnElKx3SYZLVPaNGnTUZ_YPfKm5S39xCH0hCFslfx-Ir9PATMlNsIHncpfOrPJntrZ4ypVncxAswwSf7v1uwdq_m2EmeRSuzi1_6Wq7qAUlDHBtT5--PThI7zL-7LvM8zSG17NhRlIl8dW7-V5itRGRQeqTaG_yxOrTe1etBRH8eWTa0whcaQLMwardMt5maLFPmmULIuP3_INzqf48gs1cj7k)
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
  