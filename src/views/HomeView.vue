<template>
  <div>
    <div class="bg-diagonal z-0"></div>
    <div class="max-w-screen-lg my-0 mx-auto flex justify-between p-6 gap-6 flex-col z-10 h-full sm:flex-row">
      <PostList />
      <History />
    </div>
  </div>
</template>

<script setup lang="ts">
  import PostList from '@/components/PostList.vue'
  import History from '@/components/History.vue'
</script>