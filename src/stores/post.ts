import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, ref } from 'vue'
import { gsap } from 'gsap'

interface History{
  idElement: number
  fromIndex: number
  toIndex: number
}

export const usePostStore = defineStore('post', () => {
  let posts = ref([])
  let history = ref([] as History[])
  const getPosts = computed(() => posts.value.slice(0,5))

  function fetchPosts(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        posts.value = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  function movePost(fromIndex: number, toIndex: number, idElement: number, action?: string){
    const movedItem = posts.value[fromIndex]
    posts.value.splice(fromIndex, 1)
    posts.value.splice(toIndex, 0, movedItem)

    if(action === 'up' || action === 'down'){
      const postsElements = document.querySelectorAll('.card-post')
  
      const movedPost = postsElements[toIndex]
      const targetPost = postsElements[fromIndex]
    
      const movedRect = movedPost.getBoundingClientRect()
      const targetRect = targetPost.getBoundingClientRect()
  
      if(action === 'up'){
        gsap.to(movedPost, {
          y: targetRect.top - movedRect.top,
          duration: 0.5,
          onComplete: () => {
            gsap.set(movedPost, { clearProps: 'y' })
          }
        })
        gsap.to(targetPost, {
          y: movedRect.top - targetRect.top,
          duration: 0.5,
          onComplete: () => {
            gsap.set(targetPost, { clearProps: 'y' })
          }
        })
      }
  
      if(action === 'down'){
        gsap.to(movedPost, {
          y: targetRect.top - movedRect.top,
          duration: 0.5,
          onComplete: () => {
            gsap.set(movedPost, { clearProps: 'y' })
          }
        })
        gsap.to(targetPost, {
          y: movedRect.top - targetRect.top,
          duration: 0.5,
          onComplete: () => {
            gsap.set(targetPost, { clearProps: 'y' })
          }
        })
      }
    }

    if(action !== 'undo'){
      history.value.unshift({
        idElement,
        fromIndex,
        toIndex
      })

      setTimeout(() => {
        const newCardHistory = document.querySelectorAll('.card-history')[0]
        gsap.set(newCardHistory, {y:-50, opacity:0})
        gsap.to(newCardHistory, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          onComplete: () => {
            gsap.set(newCardHistory, { clearProps: 'all' })
          }
        })
      }, 5)
    }
  }

  function restoreAction(index: number) {
    for (let i = 0; i <= index; i++) {
      movePost(history.value[i].toIndex, history.value[i].fromIndex, history.value[i].idElement, 'undo')
    }
    
    const historyCards = document.querySelectorAll('.card-history')
    const cardsToRemove = Array.from(historyCards).slice(0, history.value.length)
    setTimeout(() => {
      gsap.to(cardsToRemove, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set(cardsToRemove, { clearProps: 'all' })
          history.value.splice(0, index + 1)
        }
      })
    }, 5)
  }

  return { posts, history, getPosts, fetchPosts, movePost, restoreAction }

})
