<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { getAccessToken } from '../scripts/api'

export default defineComponent({
  name: 'IndexPage',
  mounted() {
    getAccessToken().then((result) => {
      console.log(result)
    })
  }
})
</script>
