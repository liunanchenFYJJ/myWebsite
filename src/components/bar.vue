<template>
  <div class="bar">
    <h4 style="marginTop:100px">bar here</h4>
    <hr>
    {{parserInt(a)+b}}
  </div>
</template>

<script>
  export default {
    name: 'bar',
    data () {
      return {
        a: '1',
        b: 4
      }
    }
  }
</script>
