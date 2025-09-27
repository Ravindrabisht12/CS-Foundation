# API Examples

This page demonstrates how to use some of the VitePress APIs.

## `useData`

The `useData` hook can be used to access site, theme, and page data.

```vue
<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

<template>
  <h1>Site Title: {{ site.title }}</h1>
  <p>Page Title: {{ page.title }}</p>
</template>
```

## Frontmatter

You can define metadata for a page using frontmatter.

```yaml
---
title: My Custom Title
description: A custom description for the page.
---
```
