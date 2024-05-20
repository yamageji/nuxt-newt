<script setup lang="ts">
import type { Article } from '~/types/article';

const { data } = await useNewtGetContents<Article>(
  'articles',
  {
    appUid: 'blog',
    modelUid: 'article',
    query: {
      limit: 10,
      select: ['_id', 'title', 'slug', '_sys'],
      title: '[match]Fictitious',
    },
  });
const articles = data.value?.items;
</script>

<template>
  <div>
    <h1>Nuxt Newt module test</h1>
    <ul>
      <li
        v-for="article in articles"
        :key="article._id"
      >
        <NuxtLink :to="`/articles/${article.slug}`">
          {{ article.title }}
          {{ article._sys.createdAt }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
