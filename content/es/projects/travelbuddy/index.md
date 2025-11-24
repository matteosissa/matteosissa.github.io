---
title: TravelBuddy  
date: 2025-05-04
links:
  - icon: brands/github
    name: Ver Código Fuente
    url: https://github.com/matteosissa/TravelBuddy
  - icon: presentation-chart-bar
    name: Ver Presentación del Proyecto
    url: uploads/travelbuddy/project-presentation.pptx
summary: 
Aplicación Android que tiene como objetivo conectar a viajeros con locales para facilitar la planificación.
image:
  focal_point: Top
tags:
  - Kotlin
  - Android
  - Clean Architecture
authors:
  - admin
---

**TravelBuddy** es una plataforma móvil innovadora desarrollada para **Android** que conecta a viajeros y guías locales. Permite a los viajeros planificar viajes y solicitar orientación de expertos locales, mientras empodera a los locales para monetizar su conocimiento ofreciendo servicios de guía turística en sus regiones.

La aplicación está desarrollada en **Kotlin** en la plataforma Android y se integra con un backend desarrollado con **Firebase DataConnect**.

### 🎯 Objetivo del Proyecto

TravelBuddy tiene como objetivo conectar a **viajeros** que se dirigen a un destino con personas que viven allí, para eliminar la necesidad de costosas agencias de viajes mientras se promueve el intercambio cultural y se apoya a las comunidades locales a través de orientación de viaje significativa.

### 👥 Roles de Usuario

#### Viajeros

- Buscan destinos
- Describen el tipo de experiencia que desean
- Reciben orientación de expertos locales
- Comunicación directa con guías a través de la aplicación

#### Guías Locales

- Se registran y agregan ubicaciones donde ofrecen servicios de guía
- Exploran solicitudes de viaje que coinciden con su experiencia
- Responden a consultas de viajeros con consejos personalizados

### 🏗️ Arquitectura de la Aplicación

Se siguió rigurosamente un **estilo de arquitectura clean** durante todo el desarrollo de este proyecto, lo que llevó a la definición de tres capas:

- **Entities**: clases fundamentales que definen el dominio de la aplicación.
- **Interface Adapters**: componentes de interfaz gráfica que interceptan solicitudes de usuario y manipulan formatos de datos.
- **Frameworks & Devices**: frameworks externos de los cuales la lógica central permanece independiente, como Firebase DataConnect para persistencia.

### 💯 Resultados y Habilidades Adquiridas

Este proyecto fue muy relevante por una serie de razones. En primer lugar, se llevó a cabo durante mi **programa de intercambio** en la Universidad Politécnica de Valencia, lo que me permitió trabajar en un equipo **multicultural**, mientras intentaba aprender **español** como tercer idioma. En segundo lugar, me ayudó a profundizar mi conocimiento en desarrollo móvil mientras también experimentaba con los principios de **arquitectura limpia**, que encuentro fascinantes.
