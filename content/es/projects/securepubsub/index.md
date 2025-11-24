---
title: SecurePubSub
date: 2025-01-15
links:
  - name: Ver Propuesta ABB
    url: 'uploads/abb-opc-ua/project-proposal.pdf'
    icon: 'presentation-chart-bar'
  - name: Leer Documento de Requisitos
    url: 'uploads/abb-opc-ua/requirements-definition-document.pdf'
    icon: 'arrow-down-tray'
  - name: Ver Presentación Final
    url: 'uploads/abb-opc-ua/final-presentation.pptx'
    icon: 'presentation-chart-bar'
summary: 
En colaboración con ABB, un proyecto para la implementación de una capa de seguridad sobre el modelo publish-subscribe ofrecido por la tecnología OPC UA.
image:
  focal_point: Center
tags:
  - C++
  - SCRUM
  - ABB
  - Jira
  - OPC UA Protocol
authors:
  - admin
---

El proyecto SecurePubSub fue desarrollado en el contexto de una colaboración entre **tres universidades europeas** - la Mälardalen University en Suecia, la Universidad de Zagreb en Croacia y el Politecnico di Milano en Italia - y una empresa externa, **ABB**.

### 🎯 Objetivos del Proyecto

Los objetivos del proyecto eran múltiples. En primer lugar, trabajar en un **gran equipo** de personas **geográficamente distribuidas**. El equipo para el proyecto SecurePubSub consistía en **ocho** desarrolladores, distribuidos en dos sedes, **Italia** y **Suecia**. En segundo lugar, aplicar concretamente los principios de **SCRUM** y **desarrollo ágil** en un proyecto real encargado por ABB. Por último, perfeccionar muchas de las habilidades transversales requeridas para este tipo de proyecto, en particular habilidades **organizativas** y de **presentación**. Esto fue fundamental, ya que el equipo estaba distribuido y cada dos semanas era necesario entregar un prototipo funcional del producto para presentar.

Desde el punto de vista de la implementación real encargada por ABB, el objetivo era extender la implementación _open62541_ del **protocolo OPC UA** para transmisión de datos máquina-a-máquina. En particular, se nos encomendó diseñar una **capa de seguridad** sobre el modelo de comunicación publish-subscribe. Todo se desarrolló con **C++** y **Google Test** (GTest). El código fuente de este proyecto no está disponible porque **no** es de acceso público.

### 🏗️ La Implementación

El **modelo de comunicación publish-subscribe** en el protocolo OPC UA incluye algunos nodos que producen y envían datos (publishers) y algunos otros nodos que reciben datos (subscribers). Para hacer esta comunicación segura, la información que se transmite debe estar **encriptada** con claves de encriptación. Por lo tanto, el primer objetivo del proyecto fue la implementación de un servidor separado - el **Secure Key Server**, o **SKS** - que generaría claves criptográficas periódicamente y las distribuiría a todos los publishers y subscribers pertenecientes al mismo grupo de transmisión.

Además, se introdujo un mecanismo para la gestión de **certificados digitales** para que los nodos confiaran entre sí y en el servidor SKS.

Finalmente, todo el conjunto de parámetros de configuración necesarios para establecer con éxito una transmisión de datos OPC UA segura se exportaron al usuario a través de un **archivo de configuración XML simplificado**. El análisis de la configuración, así como la inyección de parámetros en los nodos OPC UA, formaban parte de la solución final entregada.

### 💯 Resultados y Habilidades Adquiridas

Este proyecto fue muy **desafiante** por las siguientes razones:

- Los **principios SCRUM** se aplicaron rigurosamente: reuniones diarias y semanales con el equipo, entrega de un prototipo funcional cada dos semanas al cliente con una presentación bien preparada.
- **Entorno distribuido**: el equipo estaba distribuido en dos sedes y todas las comunicaciones ocurrían en inglés.
- **Curva de aprendizaje empinada** de la base de código open source: el proyecto trataba sobre extender un proyecto open source ampliamente utilizado en la industria, llamado *open62541*. Está todo escrito en lenguaje C y es bastante difícil de aprender al principio.

Debido a esto, este proyecto mejoró increíblemente mis habilidades en muchos aspectos. La **colaboración en equipo** y la **organización** eran esenciales, ya que la carga de trabajo a gestionar era muy pesada. Debido a esto aprendí mucho sobre **gestión de equipos** y el uso de herramientas como **Jira** y **Clockify** para apoyar el proceso. El proyecto también me permitió entender cómo funciona el **desarrollo ágil** y cuáles son las principales compensaciones entre este y otros enfoques como la estrategia de cascada. Finalmente, las **habilidades de presentación** eran fundamentales, ya que cada dos semanas un nuevo prototipo funcional debía ser entregado al cliente y presentado oficialmente para rastrear el progreso.
