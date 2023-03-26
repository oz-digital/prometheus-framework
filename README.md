# Prometheus Framework – Web Development from Undeground
Prometheus is a Web3 Framework focused on user experience and ease of development. It's provide libraries of components, methods, styles and many other things for frontend development on Vue 3 with SSR and Web3 support. 

**Created by OZ DAO. Visit our website: www.ozdao.dev**

# Getting Started
In Greek mythology, Prometheus is a Titan god of fire. Prometheus is best known for defying the gods by stealing fire from them and giving it to humanity in the form of technology, knowledge, and more generally, civilization. So our goal is to provide people with the best technologies and solutions that they can easily use every day.

## What's inside?
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue SFC Setup](https://vuejs.org/api/sfc-script-setup.html)
- [TypeScript](https://www.typescriptlang.org/) and [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2)

## Motivation
Why create another UI framework when there are a huge number of solutions that have been developed and supported for a long time, with a large community?

- Prometheus managed by OZ DAO
- WEB3 and UX oriented
- Easy to redefine

# Installation
To install the library, use npm:
```bash
npm install '@ozdao/prometheus-framework'
```

# Usage
You can import components from the library in three ways:


## Global Import
If you want to use all components globally, import the library and register it with your Vue app:

```js
import PrometheusFramework from '@ozdao/prometheus-framework'
// App init...
app.use(PrometheusFramework)
```

This will make all components in the library available for use in your app.


## Individual Import
If you want to use specific components from the library, import them individually and register them with your Vue app:

```js
import { createApp } from 'vue'
import { Button, Field } from '@ozdao/prometheus-framework'
// App init...
app.component('Button', Button)
app.component('Field', Field)
```
This will make only the Button and Modal components available for use in your app.


## Local Import
If you want to use a component locally within a specific Vue component, import it directly:

```html
<template>
  <Button>Slot</Button>
</template>

<script setup>
import { Button } from '@ozdao/prometheus-framework'
</script>
```
This will import the Button component from the library and make it available for use within the current Vue component only.

# Components
Prometheus Framework provides the following components:
- Text
- Link
- Button
- Field
- Carousel

For more detailed information on how to use each component, see the [component documentation.](https://docs.ozdao.dev/docs/components/) 

# Contributing
Contributions are welcome! Please see the [contributing guide](https://docs.ozdao.dev/docs/contribution/) for more information.

# License
This library is licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt).

# Changelog
All notable changes to this project will be documented in this file.
## 0.0.6 - 2023.03.26
- Added styles
## 0.0.1 - 2023.03.15
- First commmit and preparation for deploy
