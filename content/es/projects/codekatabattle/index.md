---
title: CodeKataBattle
date: 2024-01-10
links:
  - icon: brands/github
    name: Ver Código Fuente
    url: https://github.com/matteosissa/CodeKataBattleProject
  - name: Leer la Tarea
    url: /uploads/codekatabattle/assignment.pdf
    icon: 'arrow-down-tray'
  - name: Documento de Análisis de Requisitos
    url: /uploads/codekatabattle/requirements-analysis-document.pdf
    icon: 'arrow-down-tray'  
  - name: Documento de Diseño
    url: /uploads/codekatabattle/design-document.pdf
    icon: 'arrow-down-tray'
summary: Proyecto Java Spring para crear una plataforma de torneos de programación competitiva. Desarrollado con un enfoque en cascada.


image:
  focal_point: center
tags:
  - Java Spring
  - Java
  - UML
  - Análisis de Requisitos
  - Diseño de Software
  - Desarrollo en Cascada
  - Kafta
  - SonarQube
  - Microservicios
  - Git
authors:
  - admin
---

CodeKataBattle es una **plataforma basada en microservicios** para torneos de programación competitiva, desarrollada como parte del curso de **Ingeniería del Software 2** en el **Politecnico di Milano**. El proyecto fue completado por un equipo de tres estudiantes.

### 🎯 Objetivo del Proyecto

La plataforma permite a los educadores crear desafíos de programación y a los estudiantes participar en batallas competitivas. Se integra con **GitHub** para la entrega de código y utiliza **SonarQube** para la evaluación automática de la calidad del código y puntuación.

La implementación está en **Java** y aprovecha tecnologías como Java Spring, PostgreSQL, Apache Kafka, Docker e integración con la API de GitHub. El código completo se puede encontrar en GitHub.

### 🌊 Metodología de Desarrollo en Cascada

Este proyecto se destaca por su **estricta adherencia al enfoque de desarrollo en cascada**. El proceso comenzó con los **requisitos de los stakeholders** proporcionados por los instructores del curso, que definían la funcionalidad esperada de la plataforma.

A partir de estos requisitos iniciales, el equipo produjo un completo **Documento de Análisis de Requisitos** que detallaba los requisitos funcionales y no funcionales, casos de uso, diagramas UML y modelado del dominio. Este documento se puede acceder a través del enlace de arriba.

Siguiendo la fase de análisis, se creó un **Documento de Diseño** para guiar la implementación. Esto incluyó el diseño de la arquitectura del sistema, la división en microservicios, diagramas de componentes, especificaciones de API y patrones de diseño a aplicar.

Solo después de completar estas fases de documentación, el equipo procedió con la **implementación real**, que resultó en una plataforma completamente funcional con siete microservicios interconectados: Gateway, User, Tournament, Battle, GitHub Integration, Score Computation y Notification services.

### 💯 Resultados y Habilidades Adquiridas

Este proyecto fue valioso para comprender el **ciclo de vida tradicional del desarrollo de software en cascada** y la importancia de una documentación completa antes de la implementación. Requirió una planificación cuidadosa y coordinación entre los miembros del equipo para asegurar que cada fase se completara minuciosamente antes de pasar a la siguiente.

El proyecto también proporcionó experiencia práctica con **arquitectura de microservicios**, **comunicación basada en eventos** usando Kafka y **autenticación OAuth2**. Trabajar a través de las fases formales de análisis de requisitos y diseño mejoró mi capacidad para traducir las necesidades de los stakeholders en especificaciones técnicas y decisiones arquitectónicas.
