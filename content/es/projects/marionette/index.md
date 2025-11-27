---
title: Marionette
date: 2025-10-23
links:
  - icon: brands/github
    name: Paquete de Replicación
    url: https://github.com/matteosissa/MarionetteReplicationPackage
  - icon: brands/github
    name: Marionettist 
    url: https://github.com/matteosissa/Marionettist  
  - icon: brands/github
    name: Herramienta Marionette
    url: https://github.com/matteosissa/MarionetteTool
  - name: Leer Tesis
    url: /uploads/masters-thesis/masters-thesis.pdf
    icon: 'arrow-down-tray'
  - name: Ver Presentación
    url: /uploads/masters-thesis/masters-thesis-presentation.pptx
    icon: 'presentation-chart-bar'
summary: 
Marionette es un framework para inyectar configuración de comportamiento en tiempo de ejecución en aplicaciones de microservicios para pruebas A/B/n.
image:
  focal_point: Bottom
tags:
  - Java Spring
  - Java
  - Microservices
  - Kubernetes
  - Javascript
  - Clean Architecture
  - Git
  - Docker
  - Web
  - UML
authors:
  - admin
---

Marionette es un framework para inyectar **configuración de comportamiento en tiempo de ejecución** en aplicaciones de microservicios para **pruebas A/B/n**. Fue desarrollado en el contexto de mi tesis de máster en el **Politecnico di Milano**.

### 🎯 Objetivo del Proyecto

El objetivo de este proyecto era investigar y prototipar un framework que pueda introducir configuración de comportamiento en microservicios. Típicamente, las aplicaciones de microservicios tienen un comportamiento que está **hardcodeado**. Esto significa que si necesito cambiar el comportamiento del software, necesito recompilar el código y volver a desplegarlo. Con Marionette, los desarrolladores pueden identificar puntos de **configurabilidad de comportamiento** dentro del código: puntos donde el comportamiento del software es dinámico. Luego, en tiempo de ejecución, es posible cambiar el comportamiento del software sin necesidad de recompilación y redespliegue.

Esto es muy útil porque lo hace muy adecuado para **pruebas A/B/n**, donde diferentes versiones de la misma aplicación se despliegan simultáneamente y se comparan con respecto a diferentes métricas.

### 🏗️ Framework de Marionette

Marionette consta de tres componentes clave:

- **Biblioteca Marionette** (para el proyecto actual): la biblioteca contiene un conjunto de anotaciones que los desarrolladores pueden usar para marcar el código con puntos de configurabilidad de comportamiento. Por ejemplo, una sentencia if-else que ejecuta una lógica de negocios u otra, se puede marcar con la anotación `@MarionetteBehaviour` para indicar que ese punto es configurable.
- **Gestión Externalizada**: Marionette almacena todas las configuraciones de comportamiento en una base de datos **MongoDB** dedicada, de modo que son accesibles a todas las instancias de la aplicación.
- **Panel de Control de Marionette**: Marionette proporciona un panel de control para interactuar con los puntos de configuración definidos por los desarrolladores. El panel de control permite al usuario seleccionar comportamientos y crear variantes de la aplicación en tiempo de ejecución.

La arquitectura de Marionette sigue **principios de arquitectura limpia** para preservar la independencia del framework y mantener el acoplamiento suelto entre el proyecto del usuario y Marionette. Marionette se desarrolla utilizando **Java**, **Spring Boot**, **MongoDB** y **React**.

### 💯 Resultados y Habilidades Adquiridas

Este proyecto fue muy relevante porque me permitió trabajar en un proyecto complejo, producir el primer prototipo de un **trabajo de investigación** y **presentarlo** en una conferencia internacional, como mencioné anteriormente. También me dio la oportunidad de profundizar mi conocimiento de **Java** y **Spring Boot**, que uso ampliamente en el trabajo. Finalmente, lo más importante, me permitió comprender profundamente **patrones de diseño** y **arquitectura de software**, que considero habilidades fundamentales que todo desarrollador debería poseer. Durante el proyecto, apliqué **arquitectura limpia**, **patrones de diseño orientados a objetos**, patrones de **inversión de dependencias** e **inyección de dependencias** y el framework de **Spring** con todas sus funcionalidades útiles.
