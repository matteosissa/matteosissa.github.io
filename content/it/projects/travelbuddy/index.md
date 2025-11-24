---
title: TravelBuddy  
date: 2025-05-04
links:
  - icon: brands/github
    name: Visualizza Codice Sorgente
    url: https://github.com/matteosissa/TravelBuddy
  - icon: presentation-chart-bar
    name: Visualizza Presentazione Progetto
    url: uploads/travelbuddy/project-presentation.pptx
summary: 
Applicazione Android che mira a connettere viaggiatori e locali per facilitare la pianificazione.
image:
  focal_point: Top
tags:
  - Kotlin
  - Android
  - Clean Architecture
authors:
  - admin
---

**TravelBuddy** è una piattaforma mobile innovativa sviluppata per **Android** che collega viaggiatori e guide locali. Permette ai viaggiatori di pianificare viaggi e richiedere orientamento da esperti locali, mentre consente ai locali di monetizzare la loro conoscenza offrendo servizi di guida turistica nelle loro regioni.

L'applicazione è sviluppata in **Kotlin** sulla piattaforma Android e si integra con un backend sviluppato con **Firebase DataConnect**.

### 🎯 Obiettivo del Progetto

TravelBuddy mira a connettere **viaggiatori** diretti verso una destinazione con persone che vivono lì, per eliminare la necessità di costose agenzie di viaggio promuovendo al contempo lo scambio culturale e sostenendo le comunità locali attraverso guide di viaggio significative.

### 👥 Ruoli Utente

#### Viaggiatori

- Cercano destinazioni
- Descrivono il tipo di esperienza che desiderano
- Ricevono orientamento da esperti locali
- Comunicazione diretta con le guide tramite l'app

#### Guide Locali

- Si registrano e aggiungono località dove offrono servizi di guida
- Sfogliano richieste di viaggio corrispondenti alle loro competenze
- Rispondono alle richieste dei viaggiatori con consigli personalizzati

### 🏗️ Architettura dell'Applicazione

È stato rigorosamente seguito uno **stile architetturale pulito** durante tutto lo sviluppo di questo progetto, che ha portato alla definizione di tre livelli:

- **Entities**: classi fondamentali che definiscono il dominio dell'applicazione.
- **Interface Adapters**: componenti dell'interfaccia grafica che intercettano le richieste degli utenti e manipolano i formati dei dati.
- **Frameworks & Devices**: framework esterni da cui la logica centrale rimane indipendente, come Firebase DataConnect per la persistenza.

### 💯 Risultati e Competenze Acquisite

Questo progetto è stato molto rilevante per una serie di motivi. In primo luogo, è stato condotto durante il mio **programma di scambio** presso l'Università Politecnica di Valencia, che mi ha permesso di lavorare in un team **multiculturale**, cercando al contempo di imparare lo **spagnolo** come terza lingua. In secondo luogo, mi ha aiutato ad approfondire le mie conoscenze sullo sviluppo mobile sperimentando anche i principi della **clean architecture**, che trovo affascinanti.
