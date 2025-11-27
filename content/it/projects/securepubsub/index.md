---
title: SecurePubSub
date: 2025-01-15
links:
  - name: Visualizza Proposta ABB
    url: /uploads/abb-opc-ua/project-proposal.pdf
    icon: 'presentation-chart-bar'
  - name: Leggi Documento Requisiti
    url: /uploads/abb-opc-ua/requirements-definition-document.pdf
    icon: 'arrow-down-tray'
  - name: Visualizza Presentazione Finale
    url: /uploads/abb-opc-ua/final-presentation.pptx
    icon: 'presentation-chart-bar'
summary: 
In collaborazione con ABB, un progetto per l'implementazione di un livello di sicurezza sul modello publish-subscribe offerto dalla tecnologia OPC UA.
image:
  focal_point: Center
tags:
  - C++
  - SCRUM
  - Agile Development
  - ABB
  - Jira
  - OPC UA Protocol
  - Git
  - UML
  - C
  - SQL
authors:
  - admin
---

Il progetto SecurePubSub è stato sviluppato nel contesto di una collaborazione tra **tre università europee** - la Mälardalen University in Svezia, l'Università di Zagabria in Croazia e il Politecnico di Milano in Italia - e un'azienda esterna, **ABB**.

### 🎯 Obiettivi del Progetto

Gli obiettivi del progetto erano molteplici. In primo luogo, lavorare in un **grande team** di persone **geograficamente distribuite**. Il team per il progetto SecurePubSub consisteva di **otto** sviluppatori, distribuiti su due sedi, **Italia** e **Svezia**. In secondo luogo, applicare concretamente i principi di **SCRUM** e dello **sviluppo agile** su un progetto reale commissionato da ABB. Infine, affinare molte delle competenze trasversali richieste per questo tipo di progetto, in particolare competenze **organizzative** e di **presentazione**. Questo è stato fondamentale, poiché il team era distribuito e ogni due settimane era necessario consegnare un prototipo funzionante del prodotto da presentare.

Dal punto di vista dell'implementazione effettiva commissionata da ABB, l'obiettivo era estendere l'implementazione _open62541_ del **protocollo OPC UA** per la trasmissione dati machine-to-machine. In particolare, ci è stato affidato il compito di progettare un **livello di sicurezza** sopra il modello di comunicazione publish-subscribe. Tutto è stato sviluppato con **C++** e **Google Test** (GTest). Il codice sorgente di questo progetto non è disponibile perché **non** è pubblicamente accessibile.

### 🏗️ L'Implementazione

Il **modello di comunicazione publish-subscribe** nel protocollo OPC UA include alcuni nodi che producono e inviano dati (publisher) e alcuni altri nodi che ricevono dati (subscriber). Per rendere questa comunicazione sicura, le informazioni trasmesse devono essere **crittografate** con chiavi di crittografia. Pertanto, il primo obiettivo del progetto è stato l'implementazione di un server separato - il **Secure Key Server**, o **SKS** - che avrebbe generato chiavi crittografiche periodicamente e le avrebbe distribuite a tutti i publisher e subscriber appartenenti allo stesso gruppo di trasmissione.

Inoltre, è stato introdotto un meccanismo per la gestione dei **certificati digitali** affinché i nodi si fidassero l'uno dell'altro e del server SKS.

Infine, l'intero insieme di parametri di configurazione necessari per stabilire con successo una trasmissione dati OPC UA sicura sono stati esportati all'utente attraverso un **file di configurazione XML semplificato**. Il parsing della configurazione, così come l'iniezione dei parametri nei nodi OPC UA, facevano parte della soluzione finale consegnata.

### 💯 Risultati e Competenze Acquisite

Questo progetto è stato molto **impegnativo** per i seguenti motivi:

- I **principi SCRUM** sono stati rigorosamente applicati: riunioni giornaliere e settimanali con il team, consegna di un prototipo funzionante ogni due settimane al cliente con una presentazione ben preparata.
- **Contesto distribuito**: il team era distribuito su due sedi e tutte le comunicazioni avvenivano in inglese.
- **Curva di apprendimento ripida** della codebase open source: il progetto riguardava l'estensione di un progetto open source ampiamente utilizzato nell'industria, chiamato *open62541*. È tutto scritto in linguaggio C ed è piuttosto difficile da imparare inizialmente.

Per questo motivo, questo progetto ha migliorato incredibilmente le mie competenze sotto molti aspetti. La **collaborazione di squadra** e l'**organizzazione** erano essenziali, poiché il carico di lavoro da gestire era molto pesante. Per questo ho imparato molto sulla **gestione del team** e sull'utilizzo di strumenti come **Jira** e **Clockify** per supportare il processo. Il progetto mi ha anche permesso di capire come funziona lo **sviluppo agile** e quali sono i principali compromessi tra questo e altri approcci come la strategia a cascata. Infine, le **competenze di presentazione** erano fondamentali, poiché ogni due settimane un nuovo prototipo funzionante doveva essere consegnato al cliente e presentato ufficialmente per tracciare i progressi.
