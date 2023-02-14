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
            font-size: $h3-font;
            color: $hard-grey;
            margin-bottom: 45px;
      }

      input {
            @include input;
            width: 100%;
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