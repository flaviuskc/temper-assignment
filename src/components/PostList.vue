<template>
    <div class="w-full z-10 sm:w-5/12">
        <span class="text-white font-bold" data-cy="title-post-list">Sortable Post List</span>
        <div class="flex flex-col pt-4 gap-4" data-cy="post-list">
            <div v-for="(post,index) in posts" :key="index" class="card-post">
                <PostItem 
                    :post="post"
                    :first-post="index === 0"
                    :last-post="posts.length - 1 === index"
                    :index-element="index"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted } from 'vue'
    import PostItem from '@/components/PostItem.vue'
    import { usePostStore } from '@/stores/post'

    const store = usePostStore()
    
    onMounted(() => {
        store.fetchPosts()
    })

    const posts = computed(() => store.getPosts)
</script>