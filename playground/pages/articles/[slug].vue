<script lang='ts' setup>
import type { Article } from '~/types/article';

const route = useRoute();
const { slug } = route.params;

const { data } = await useNewtGetFirstContent<Article>(`article-${slug}`, {
  appUid: 'blog',
  modelUid: 'article',
  query: {
    slug,
    select: ['_id', 'title', 'slug', 'body'],
  },
});
</script>

<template>
  <main class="main">
    <h1>{{ data?.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="data?.body" />
  </main>
</template>
