---
title: 'curtOS'
description: 'A simple x86-based operating system written in Rust and named after the nerd who wrote it.'
publishDate: 'Jan 16 2024'
seo:
  image:
    src: '/curtOS-1.png'
    alt: 'A screenshot of a terminal screen'
isFeatured: true
---

![Project preview](/curtOS-1.png)

**Project Overview:**

_curtOS_ is a simple x86-based operating system written in Rust and named after the nerd who wrote it. Created through the tutorial "[Writing an OS in Rust](https://os.phil-opp.com/)" by Philipp Oppermann.

## Objectives

1. Gain familiarity with Rust as a low-level language.
2. Increase understanding of kernels and operating system architecture.
3. Utilize QEMU to emulate a bare-metal x86 machine.

## Features

1. **A Minimal Rust Kernel:**

- Boots directly onto x86 computers and emulators.
- Handles various CPU exceptions (invalid opcodes, double and triple faults).
- Allows for cooperative multitasking on the kernel.

## Technology Stack

Rust!

## Outcome

_curtOS_ was probably one of the most enlightening learning experiences I've had in a long time. Stepping away from the software/web development world to learn about hardware and operating systems gave me a greater appreciation for all things computers. I think a future project will be to learn how to make an OS for the ARM architecture to get an OS running on a Raspberry Pi Zero.

[Link to Project](https://github.com/curtis-wils0n/curt_os)