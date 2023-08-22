<template>
    <div class="w-full rounded drop-shadow-md sm:w-5/12">
        <div class="p-4 bg-white rounded-t">
            <span class="font-bold">List of actions commited</span>
        </div>
        <div class="p-4 bg-gray-100 border-t rounded-b">
            <span 
                v-if="history.length === 0"
            >
                None actions commited yet.
            </span>
            <div 
                v-else
                class="drop-shadow h-full"
            >
                <div v-for="(item,index) in history" :key="index" class="card-history">
                    <div 
                        class="flex justify-between items-center bg-white p-2"
                        :class="{ 
                            'rounded-t' : index === 0,
                            'rounded-b' : index === history.length - 1,
                            'border-b' : index !== history.length - 1
                        }"
                        :data-cy="`card-history-${index}`"
                    >
                        <span class="text-sm" :data-cy="`card-history-span-${index}`">Moved post {{ item.idElement }} from index {{ item.fromIndex }} to index {{ item.toIndex }}</span>
                        <button class="bg-green-500 text-sm px-4 py-2 rounded bg-secondary text-green-800" @click="restoreAction(index)">Time travel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { usePostStore } from '@/stores/post'
    const { history, restoreAction } = usePostStore()
</script>