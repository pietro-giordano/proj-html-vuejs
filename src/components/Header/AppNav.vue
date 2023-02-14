<script>
export default {
      name: 'AppNav',
      props: {
            link: Object
      }
}
</script>

<template>
      <li>
            <a :class="link.selected ? 'active' : ''" :href="link.url">
                  {{ link.name }}
                  <span v-if="link.new">new</span>
            </a>
      </li>
</template>

<style lang="scss" scoped>

</style>