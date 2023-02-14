<script>
export default {
      name: 'Testimonials',
      props: {
            testimonial: Object
      },
      methods: {

            getImgPath: function (imgPath) {
                  return new URL(imgPath, import.meta.url).href;
            }
      }
}
</script>

<template>
      <div class="testimonials" v-if="testimonial.selected">
            <h2>Testimonials</h2>
            <p>Here's what our happy drivers had to say about our services:</p>

            <div class="testimonials-photo">
                  <img :src="getImgPath(`../../assets/${testimonial.photo}`)" alt="">
            </div>

            <p>{{ testimonial.text }}</p>
            <p>{{ testimonial.name }}</p>
      </div>

</template>

<style lang="scss">
.testimonials {
      @include container;
      @include flex(column, center, center);

      &-photo {
            width: 100px;
            height: 100px;

            img {
                  width: 100%;
            }

      }
}
</style>