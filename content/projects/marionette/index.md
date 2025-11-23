---
title: Marionette
date: 2025-10-23
links:
  - icon: brands/github
    name: Replication Package
    url: https://github.com/matteosissa/MarionetteReplicationPackage
  - icon: brands/github
    name: Marionettist 
    url: https://github.com/matteosissa/Marionettist  
  - icon: brands/github
    name: Marionette Tool
    url: https://github.com/matteosissa/MarionetteTool
  - name: Read Thesis
    url: 'uploads/masters-thesis/masters-thesis.pdf'
    icon: 'arrow-down-tray'
  - name: View Presentation
    url: 'uploads/masters-thesis/masters-thesis-presentation.pptx'
    icon: 'presentation-chart-bar'
summary: Master's thesis project focusing on developing a framework to inject behavioural variability points in the codebase of a microservice-based application.


image:
  focal_point: Bottom
tags:
  - Java Spring
  - Microservices
  - Kubernetes
  - Clean Architecture
authors:
  - admin
---

The Marionette project was developed as my **master's thesis project** at **Politecnico di Milano** and it was designed in collaboration with the **Universitat Politècnica de València**, where I spent some months as an exchange student.

### 🎯 Project Goal

Marionette aims to fill a gap in the current research landscape for microservice-based systems, which is the possibility to make the software **change in behaviour** and **adapt** without any need for code recompilation or redeployment. It also aims to **automate the comparison** of different behavioural variants based on custom metrics.

The implementation is in **Java** and it leverages a stack of various technologies: Java Spring, JavaParser, Kubernetes, Docker, Prometheus, React. The codebase can be found on the GitHub link.

### 🏗️ The Framework

The Marionette framework comprises two main components that work together:

**The Marionette Tool** - A source code transformation tool that enables developers to define behavioural variations for any method in the codebase (Java - JavaParser).

**The Marionettist** - A central behavioural management service providing:

- A **simplified graphical interface** (React) for switching between predefined behaviours at runtime without recompilation.
- **Automatic discovery** of all cluster nodes with defined variation points.
- An **automated A/B/n testing pipeline** for comparing behavioural combinations across services and evaluating their performance impact (Docker, Kubernetes, Prometheus).

### 💯 Results and Skills Acquired

This project turned out to be challenging because it involved several technologies and it covered many aspects of software development, from **full stack application design** (backend and frontend) to **operational concerns** (deployment, orchestration, networking, CICD pipelines).
It allowed me to further explore the development of **microservice-based architectures** and the **deployment** and **orchestration** concerns related to this architectural style (Docker, Kubernetes). It was also important for me to get hands-on practice on **monitoring tools** like Prometheus and automate the process of comparison between system configurations to extract relevant data for decision-making.
Finally, the project was fully developed following **clean architecture principles**, which I mastered while developing this system.