---
title: CodeKataBattle
date: 2024-01-10
links:
  - icon: brands/github
    name: View Source Code
    url: https://github.com/matteosissa/CodeKataBattleProject
  - name: Read Assignment
    url: /uploads/codekatabattle/assignment.pdf
    icon: 'arrow-down-tray'
  - name: Requirements Analysis Doc
    url: /uploads/codekatabattle/requirements-analysis-document.pdf
    icon: 'arrow-down-tray'  
  - name: Design Document
    url: /uploads/codekatabattle/design-document.pdf
    icon: 'arrow-down-tray'
summary: Java Spring project aiming to create a platform for competitive coding tournaments. Developed with a waterfall approach.


image:
  focal_point: center
tags:
  - Java Spring
  - Java
  - UML
  - Requirements Analysis
  - Software Design
  - Waterfall development
  - Kafta
  - SonarQube
  - Microservices
  - Git
authors:
  - admin
---

CodeKataBattle is a **microservices-based platform** for competitive programming tournaments, developed as part of the **Software Engineering 2** course at **Politecnico di Milano**. The project was completed by a team of three students.

### 🎯 Project Goal

The platform enables educators to create coding challenges and students to participate in competitive battles. It integrates with **GitHub** for code submission and uses **SonarQube** for automated evaluation of code quality and scoring.

The implementation is in **Java** and leverages technologies including Java Spring, PostgreSQL, Apache Kafka, Docker, and GitHub API integration. The complete codebase can be found on GitHub.

### 🌊 Waterfall Development Methodology

This project stands out for its **strict adherence to the waterfall development approach**. The process began with the **stakeholder requirements** provided by the course instructors, which defined the expected functionality of the platform.

From these initial requirements, the team produced a comprehensive **Requirements Analysis Document** that detailed functional and non-functional requirements, use cases, UML diagrams, and domain modeling. This document can be accessed through the link above.

Following the analysis phase, a **Design Document** was created to guide the implementation. This included the system architecture design, microservices breakdown, component diagrams, API specifications, and design patterns to be applied.

Only after completing these documentation phases did the team proceed with the **actual implementation**, which resulted in a fully functional platform with seven interconnected microservices: Gateway, User, Tournament, Battle, GitHub Integration, Score Computation, and Notification services.

### 💯 Results and Skills Acquired

This project was valuable for understanding the **traditional waterfall software development lifecycle** and the importance of comprehensive documentation before implementation. It required careful planning and coordination among team members to ensure that each phase was completed thoroughly before moving to the next.

The project also provided hands-on experience with **microservices architecture**, **event-driven communication** using Kafka and **OAuth2 authentication**. Working through formal requirements analysis and design phases enhanced my ability to translate stakeholder needs into technical specifications and architectural decisions.