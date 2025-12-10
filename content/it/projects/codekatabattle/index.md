---
title: CodeKataBattle
date: 2024-01-10
links:
  - icon: brands/github
    name: Visualizza il Codice Sorgente
    url: https://github.com/matteosissa/CodeKataBattleProject
  - name: Leggi l'Obiettivo
    url: /uploads/codekatabattle/assignment.pdf
    icon: 'arrow-down-tray'
  - name: Documento di Analisi dei Requisiti
    url: /uploads/codekatabattle/requirements-analysis-document.pdf
    icon: 'arrow-down-tray'  
  - name: Documento di Design
    url: /uploads/codekatabattle/design-document.pdf
    icon: 'arrow-down-tray'
summary: Progetto Java Spring per la creazione di una piattaforma per tornei di programmazione competitiva. Sviluppato con un approccio waterfall.


image:
  focal_point: center
tags:
  - Java Spring
  - Java
  - UML
  - Analisi dei Requisiti
  - Software Design
  - Sviluppo Waterfall
  - Kafta
  - SonarQube
  - Microservizi
  - Git
authors:
  - admin
---

CodeKataBattle è una **piattaforma basata su microservizi** per tornei di programmazione competitiva, sviluppata nell'ambito del corso di **Ingegneria del Software 2** al **Politecnico di Milano**. Il progetto è stato completato da un team di tre studenti.

### 🎯 Obiettivo del Progetto

La piattaforma consente agli educatori di creare sfide di programmazione e agli studenti di partecipare a battaglie competitive. Si integra con **GitHub** per la sottomissione del codice e utilizza **SonarQube** per la valutazione automatica della qualità del codice e del punteggio.

L'implementazione è in **Java** e sfrutta tecnologie tra cui Java Spring, PostgreSQL, Apache Kafka, Docker e integrazione con le API di GitHub. Il codice completo è disponibile su GitHub.

### 🌊 Metodologia di Sviluppo Waterfall

Questo progetto si distingue per la sua **rigorosa aderenza all'approccio di sviluppo waterfall**. Il processo è iniziato con i **requisiti degli stakeholder** forniti dai docenti del corso, che definivano le funzionalità attese della piattaforma.

A partire da questi requisiti iniziali, il team ha prodotto un completo **Documento di Analisi dei Requisiti** che dettagliava i requisiti funzionali e non funzionali, i casi d'uso, i diagrammi UML e la modellazione del dominio. Questo documento è accessibile tramite il link sopra.

Seguendo la fase di analisi, è stato creato un **Documento di Design** per guidare l'implementazione. Questo includeva il design dell'architettura del sistema, la suddivisione in microservizi, i diagrammi dei componenti, le specifiche delle API e i design pattern da applicare.

Solo dopo aver completato queste fasi di documentazione il team ha proceduto con l'**implementazione effettiva**, che ha portato a una piattaforma completamente funzionale con sette microservizi interconnessi: Gateway, User, Tournament, Battle, GitHub Integration, Score Computation e Notification services.

### 💯 Risultati e Competenze Acquisite

Questo progetto è stato prezioso per comprendere il **ciclo di vita tradizionale dello sviluppo software waterfall** e l'importanza di una documentazione completa prima dell'implementazione. Ha richiesto un'attenta pianificazione e coordinamento tra i membri del team per assicurare che ogni fase fosse completata accuratamente prima di passare alla successiva.

Il progetto ha inoltre fornito esperienza pratica con l'**architettura a microservizi**, la **comunicazione event-driven** tramite Kafka e l'**autenticazione OAuth2**. Lavorare attraverso le fasi formali di analisi dei requisiti e design ha migliorato la mia capacità di tradurre le esigenze degli stakeholder in specifiche tecniche e decisioni architetturali.
