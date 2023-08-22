<template>
    <div class="flex flex-row justify-between items-center p-3 bg-white rounded drop-shadow-md h-16" :data-cy="`post-${post.id}`">
        <span>Post {{ post.id }}</span>
        <div class="flex flex-col gap-3">
            <ChevronUp v-if="!firstPost" class="cursor-pointer" @click="movePost(indexElement, indexElement - 1, post.id, 'up')" />
            <ChevronDown v-if="!lastPost" class="cursor-pointer" @click="movePost(indexElement, indexElement + 1, post.id, 'down')" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import ChevronDown from '@/components/icons/ChevronDown.vue'
    import ChevronUp from '@/components/icons/ChevronUp.vue'
    import { usePostStore } from '@/stores/post'

    defineProps({
        post: {
            type: Object,
            required: true
        },
        firstPost: Boolean,
        lastPost: Boolean,
        indexElement: {
            type: Number,
            required: true
        }
    })

    const { movePost } = usePostStore()
</script>