---
title: Foundation Content 1
description: Learn how front-end clients communicate with cloud-native systems
author: robvet
ms.date: 04/06/2022
---

# Orchestration 
## Subsection for Design 

Up until now, we could build an orchestration in Copilot Studio to reliably execute a predefined path of tasks. With a similar experience to Logic Apps, it's a visual, no-code experience with connectors and the ability to invoke custom code.

We could also build a custom LLM app in which we can feed a prompt, business rules, and data, and have the LLM reason through the orchestration steps. For a more deterministic experience, we'd want to build an LLM agent with tools (functions) for each step. The LLM agent can reason through the orchestration and invoke the needed tools.   

At initial glance, the Semantic Kernel Process Framework appears to sit in the middel. 

construct as a no-code alternative for building process flows and contrasting it with building an agent workflow that can infer processes and call on needed tools (or OpenAI Functions). 

![Direct client to service communication](../media/foundation/direct-client-to-service-communication.png)

**Figure 4-2.** Direct client to service communication

While simple to implement, direct client communication would be acceptable only for simple microservice applications. This pattern tightly couples front-end clients to core back-end services, opening the door for many problems, including:

- Client susceptibility to back-end service refactoring.
- A wider attack surface as core back-end services are directly exposed.
- Duplication of cross-cutting concerns across each microservice.
- Overly complex client code - clients must keep track of multiple endpoints and handle failures in a resilient way.


## Simple Gateways

To start, you could build your own API Gateway service. A quick search of GitHub will provide many examples.

## Azure Application Gateway

For simple gateway requirements, you may consider [Azure Application Gateway](/azure/application-gateway/overview). Available as an Azure [PaaS service](https://azure.microsoft.com/overview/what-is-paas/), it includes basic gateway features such as URL routing, SSL termination, and a Web Application Firewall. The service supports [Layer-7 load balancing](https://www.nginx.com/resources/glossary/layer-7-load-balancing/) capabilities. With Layer 7, you can route requests based on the actual content of an HTTP message, not just low-level TCP network packets.

## Azure API Management


Here are examples of how policies can affect the behavior of your cloud-native services:  

- Restrict service access.
- Enforce authentication.  
- Throttle calls from a single source, if necessary.
- Enable caching.
- Block calls from specific IP addresses.
- Control the flow of the service.
- Convert requests from SOAP to REST or between different data formats, such as from XML to JSON.

