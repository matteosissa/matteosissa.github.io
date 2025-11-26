---
title: SecurePubSub
date: 2025-01-15
links:
  - name: View ABB Proposal
    url: 'uploads/abb-opc-ua/project-proposal.pdf'
    icon: 'presentation-chart-bar'
  - name: Read Requirements Doc
    url: 'uploads/abb-opc-ua/requirements-definition-document.pdf'
    icon: 'arrow-down-tray'
  - name: View Final Presentation
    url: 'uploads/abb-opc-ua/final-presentation.pptx'
    icon: 'presentation-chart-bar'
summary: 
In collaboration with ABB, a project for the implementation of a security layer on top of the publish-subscribe model offered by the OPC UA technology.
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
  - C
  - UML
authors:
  - admin
---

The SecurePubSub project was developed in the context of a collaboration between **three European universities** - the Mälardalen University in Sweden, the University of Zagreb in Croatia and the Politecnico di Milano in Italy - and an external company, **ABB**.

### 🎯 Project Goals

The goals of the project were manifold. Firstly, to work in a **large team** of people who were **geographically distributed**. The team for the SecurePubSub project consisted of **eight** developers, spread across two sites, **Italy** and **Sweden**. Secondly, to concretely apply the principles of **SCRUM** and **agile development** on a real project commissioned by ABB. Lastly, to refine many of the soft skills required for this kind of project, in particular **organisational** and **presentation** skills. This was fundamental, as the team was distributed and every two weeks it was required to deliver a working prototype of the product to present.

From the point of view of the actual implementation commissioned by ABB, the goal was to extend the _open62541_ implementation of the **OPC UA protocol** for machine to machine data transmission. In particular, we were tasked to design a **security layer** on top of the publish-subscribe model of communication. Everything was developed with **C++** and **Google Test** (GTest). The source code for this project is not available because it is **not** publicly accessible.

### 🏗️ The Implementation

The **publish-subscribe communication model** in the OPC UA protocol includes some nodes that produce and send data (publishers) and some other nodes that receive data (subscribers). To make this communication secure, the information being transmitted must be **encrypted** with encryption keys. Therefore, the first objective of the project was the implementation of a separate server - the **Secure Key Server**, or **SKS** - that would generate cryptographic keys periodically and distribute them to all publishers and subscribers belonging to the same group for transmission.

Furthermore, a mechanism for the management of **digital certificates** was introduced for the nodes to trust each other and to trust the SKS server.

Finally, the whole set of configuration parameters that were necessary to successfully establish a secure OPC UA data transmission were exported to the user through a **simplified XML configuration file**. The parsing of the configuration, as well as the injection of parameters in the OPC UA nodes were part of the final delivered solution.

### 💯 Results and Skills Acquired

This project was very **challenging** for the following reasons:

- **SCRUM principles** were strictly applied: daily and weekly meetings with the team, delivery of a working prototype every two weeks to the customer with a nicely prepared presentation.
- **Distributed setting**: the team was spread across two sites and all communications happened in English.
- **Steep learning curve** of the open source codebase: the project was about extending an open source project which is widely used in the industry, called *open62541*. It is all written in C language and quite difficult to learn at first.

Because of this, this project incredibly improved my skills under many aspects. **Team collaboration** and **organisation** were essential, as the workload to manage was very heavy. Because of this I learnt a lot about **team management** and the usage of tools like **Jira** and **Clockify** to support the process. The project also allowed me to understand how **agile development** works and what are the main tradeoffs between it and other approaches like the waterfall strategy. Finally, **presentation skills** were fundamental, as every two weeks a new working prototype had to be handed in to the customer and presented officially to track progress.