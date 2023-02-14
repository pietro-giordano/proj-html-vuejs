<script>
export default {
      name: 'Newsletter',
}
</script>

<template>
      <div class="container">
            <h3>Sign up to our Newsletter</h3>

            <input type="text" name="" id="">

            <button>subscribe</button>

            <p>(We do not share your data with anybody, and only use it for its intended purpose)</p>
      </div>
</template>

<style lang="scss" scoped>
.container {
      @include container(500px);
      @include flex(column, flex-start, center);
      padding: 60;

      h3 {
            font-size: 1.5rem;
            color: $hard-grey;
            margin-bottom: 45px;
      }

      input {
            width: 100%;
            border: 1px solid $medium-grey;
            padding: 12px;
            border-radius: 5px;
      }

      button {
            @include button;
            width: 100%;
            margin: 25px;
      }

      p {
            font-size: $little-font;
            color: $medium-grey;
      }
}
</style>