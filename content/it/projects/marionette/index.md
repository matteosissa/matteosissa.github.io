---
title: Marionette
date: 2025-10-23
links:
  - icon: brands/github
    name: Pacchetto di Replica
    url: https://github.com/matteosissa/MarionetteReplicationPackage
  - icon: brands/github
    name: Marionettist 
    url: https://github.com/matteosissa/Marionettist  
  - icon: brands/github
    name: Strumento Marionette
    url: https://github.com/matteosissa/MarionetteTool
  - name: Leggi Tesi
    url: 'uploads/masters-thesis/masters-thesis.pdf'
    icon: 'arrow-down-tray'
  - name: Visualizza Presentazione
    url: 'uploads/masters-thesis/masters-thesis-presentation.pptx'
    icon: 'presentation-chart-bar'
summary: Progetto di tesi magistrale incentrato sullo sviluppo di un framework per iniettare punti di variabilità comportamentale nel codice di un'applicazione basata su microservizi.


image:
  focal_point: Bottom
tags:
  - Java Spring
  - Microservices
  - Kubernetes
  - Docker
  - Clean Architecture
authors:
  - admin
---

Il progetto Marionette è stato sviluppato come **progetto di tesi magistrale** al **Politecnico di Milano** ed è stato progettato in collaborazione con l'**Universitat Politècnica de València**, dove ho trascorso alcuni mesi come studente in scambio.

### 🎯 Obiettivo del Progetto

Marionette mira a colmare una lacuna nell'attuale panorama di ricerca per i sistemi basati su microservizi, ovvero la possibilità di far **cambiare comportamento** e **adattare** il software senza alcuna necessità di ricompilazione o ridistribuzione del codice. Il framework mira inoltre ad **automatizzare il confronto** tra diverse varianti comportamentali basandosi su metriche personalizzate.

L'implementazione è in **Java** e sfrutta un insieme di varie tecnologie: Java Spring, JavaParser, Kubernetes, Docker, Prometheus, React. Il codice sorgente può essere trovato sui link GitHub.

### 🏗️ Il Framework

Il framework Marionette comprende due componenti principali che lavorano insieme:

**Lo Strumento Marionette** - Uno strumento di trasformazione del codice sorgente che permette agli sviluppatori di definire variazioni comportamentali per qualsiasi metodo nel codice (Java - JavaParser).

**Il Marionettist** - Un servizio centrale di gestione comportamentale che fornisce:

- Un'**interfaccia grafica semplificata** (React) per cambiare tra comportamenti predefiniti a runtime senza ricompilazione.
- **Scoperta automatica** di tutti i nodi del cluster con punti di variazione definiti.
- Una **pipeline automatizzata di A/B/n testing** per confrontare combinazioni comportamentali tra servizi e valutare il loro impatto sulle prestazioni (Docker, Kubernetes, Prometheus).

### 💯 Risultati e Competenze Acquisite

Questo progetto si è rivelato impegnativo perché ha coinvolto diverse tecnologie e ha coperto molti aspetti dello sviluppo software, dalla **progettazione di applicazioni full stack** (backend e frontend) agli **aspetti operativi** (deployment, orchestrazione, networking, pipeline CICD).
Mi ha permesso di esplorare ulteriormente lo sviluppo di **architetture basate su microservizi** e le problematiche di **deployment** e **orchestrazione** relative a questo stile architetturale (Docker, Kubernetes). È stato anche importante per me acquisire esperienza pratica su **strumenti di monitoraggio** come Prometheus e automatizzare il processo di confronto tra configurazioni di sistema per estrarre dati rilevanti per il decision-making.
Infine, il progetto è stato interamente sviluppato seguendo i **principi della clean architecture**, che ho padroneggiato durante lo sviluppo di questo sistema.
