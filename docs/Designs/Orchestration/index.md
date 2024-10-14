---
title: Cloud-native resiliency
description: Architecting Cloud Native .NET Apps for Azure | Cloud Native Resiliency
author: robvet
ms.date: 04/06/2022
---

# Orchestration Overview

## Overview of the Orchestration Content 
#### Index Page for OnRamp/Modeling Sub Section

Up until now, we could build an orchestration in Copilot Studio to reliably execute a predefined path of tasks. With a similar experience to Logic Apps, it's a visual, no-code experience with connectors and the ability to invoke custom code.

We could also build a custom LLM app in which we can feed a prompt, business rules, and data, and have the LLM reason through the orchestration steps. For a more deterministic experience, we'd want to build an LLM agent with tools (functions) for each step. The LLM agent can reason through the orchestration and invoke the needed tools.   

At initial glance, the Semantic Kernel Process Framework appears to sit in the middel. 

construct as a no-code alternative for building process flows and contrasting it with building an agent workflow that can infer processes and call on needed tools (or OpenAI Functions). 



Resiliency is the ability of your system to react to failure and still remain functional. It's not about avoiding failure, but accepting failure and constructing your cloud-native services to respond to it. You want to return to a fully functioning state quickly as possible.

Unlike traditional monolithic applications, where everything runs together in a single process, cloud-native systems embrace a distributed architecture as shown in Figure 6-1:

![Distributed cloud-native environment](../media/foundation/distributed-cloud-native-environment.png)

**Figure 6-1.** Distributed cloud-native environment

Operating in this environment, a service must be sensitive to many different challenges:

- Unexpected network latency - the time for a service request to travel to the receiver and back.

- [Transient faults](/azure/architecture/best-practices/transient-faults) - short-lived network connectivity errors.

- Blockage by a long-running synchronous operation.

