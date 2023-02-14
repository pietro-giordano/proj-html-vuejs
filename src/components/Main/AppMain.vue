<script>
import Testimonials from './Testimonials.vue';

export default {
      name: 'AppMain',
      components: {
            Testimonials,
      },
      data() {
            return {
                  testimonials: [
                        {
                              name: 'Sophia Jones',
                              photo: 'testimonial-sophia.png',
                              text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                              selected: true
                        }, {
                              name: 'Grant Smith',
                              photo: 'testimonial-grant.png',
                              text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                              selected: false
                        }, {
                              name: 'Harold White',
                              photo: 'testimonial-harold.png',
                              text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                              selected: false
                        }, {
                              name: 'Kate Middleton',
                              photo: 'testimonial-kate.png',
                              text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                              selected: false
                        }, {
                              name: 'Kelly Clarkson',
                              photo: 'testimonial-kelly.png',
                              text: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.',
                              selected: false
                        },
                  ]
            }
      },
      methods: {

            changeTestimonial(index) {
                  for (let i = 0; i < this.testimonials.length; i++) {
                        this.testimonials[i].selected = false;
                  }
                  this.testimonials[index].selected = true;
            }
      }
}
</script>

<template>

      <section id="testimonials">
            <Testimonials :testimonial="testimonial" v-for="testimonial in testimonials" />

            <div class="point-container">
                  <div class="point" v-for="(testimonial, index) in testimonials"
                        :class="testimonial.selected ? 'point-selected' : ''" @click="changeTestimonial(index)"></div>
            </div>
      </section>

</template>

<style lang="scss" scoped>
#testimonials {
      @include bg-image('../../assets/testimonial-background.jpg');
      @include flex(column, center, center);
      height: 400px;

      .point-container {
            @include flex(row, center);

            .point {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  border: 1px solid $medium-grey;
                  cursor: pointer;

                  &.point-selected {
                        background-color: $medium-grey;
                  }
            }
      }
}
</style>