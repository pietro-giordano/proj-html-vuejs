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

            <p class="text">{{ testimonial.text }}</p>
            <p class="name">{{ testimonial.name }}</p>
      </div>
</template>

<style lang="scss" scoped>
.testimonials {
      @include container(600px);
      @include flex(column, center, center);

      h2 {
            font-size: $h2-font;
      }

      p {
            color: $medium-grey;
            padding: 15px;

            &.text {
                  font-style: italic;
                  font-size: $medium-font;
                  letter-spacing: 3px;
                  text-align: center;
            }

            &.name {
                  font-weight: bold;
                  font-size: $medium-font;
                  letter-spacing: 2px;
            }
      }

      &-photo {
            margin: 25px 0 15px;
            width: 120px;
            height: 120px;

            img {
                  width: 100%;
            }
      }
}
</style>