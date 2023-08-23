---
**NOTE:** 

The following creates a diagram in Mermaid, mermaid.live

---
[![](https://mermaid.ink/img/pako:eNq1VLFy2zAM_RUcZ1tu3E1DpuSayyXpYG9VBoSELMYSyZCgm5zP_x7I1Hmol6ZNNIkP4MPDOxB7pb0hVatEL5mcpiuLm4hD40C-gJGttgEdw1P0vxPF84CAuxEvkSltfnlZ8Bp-XK-hYw6pXiwSZ2MpVTpVHfXJuq2tWrugVxxCTxjCIgUsRKjZ7pDpxD-C5X8u7FOdGm7W93dgvM4DOS5Zhs4uf464Aa2TcPqYQu4I5BK0tqcvFijuVc__IO8Wd7jS0Qb-G5UPXqBoNx2Db-FEtBai6QCJZUIS0CvpzNZt_qwyTp1gKPWIdUepJKx-PkAb_XA8fa41Bnn0xruPufNrD428EcfjdKlaDseBs9IbprdGzQQRaiqx5bfl9_nF_KJRcJhBVVXw-P9eFhMnizT2_RPqLbTZCaN3xcVIzlAsKU4ok5qpgaIMrJHHvR9rNUqCwyTUUIu5l44ad5BUzOxXb06rmmOmmcph7GnaBapusU-CkrHs431ZGMe9cXgHnap6xw?type=png)](https://mermaid.live/edit#pako:eNq1VLFy2zAM_RUcZ1tu3E1DpuSayyXpYG9VBoSELMYSyZCgm5zP_x7I1Hmol6ZNNIkP4MPDOxB7pb0hVatEL5mcpiuLm4hD40C-gJGttgEdw1P0vxPF84CAuxEvkSltfnlZ8Bp-XK-hYw6pXiwSZ2MpVTpVHfXJuq2tWrugVxxCTxjCIgUsRKjZ7pDpxD-C5X8u7FOdGm7W93dgvM4DOS5Zhs4uf464Aa2TcPqYQu4I5BK0tqcvFijuVc__IO8Wd7jS0Qb-G5UPXqBoNx2Db-FEtBai6QCJZUIS0CvpzNZt_qwyTp1gKPWIdUepJKx-PkAb_XA8fa41Bnn0xruPufNrD428EcfjdKlaDseBs9IbprdGzQQRaiqx5bfl9_nF_KJRcJhBVVXw-P9eFhMnizT2_RPqLbTZCaN3xcVIzlAsKU4ok5qpgaIMrJHHvR9rNUqCwyTUUIu5l44ad5BUzOxXb06rmmOmmcph7GnaBapusU-CkrHs431ZGMe9cXgHnap6xw)
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
  