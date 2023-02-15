<script>
import FirstLesson from './FirstLesson.vue';
import Courses from './Courses.vue';
import Testimonials from './Testimonials.vue';
import LatestNews from './LatestNews.vue';
import Newsletter from './Newsletter.vue';

export default {
      name: 'AppMain',
      components: {
            FirstLesson,
            Courses,
            Testimonials,
            LatestNews,
            Newsletter,
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
      <section id="first-lesson">
            <FirstLesson />
      </section>

      <section id="courses">
            <Courses />
      </section>

      <section id="testimonials">
            <Testimonials :testimonial="testimonial" v-for="testimonial in testimonials" />

            <div class="point-container">
                  <div class="point" v-for="(testimonial, index) in testimonials"
                        :class="testimonial.selected ? 'point-selected' : ''" @click="changeTestimonial(index)"></div>
            </div>
      </section>

      <section id="latest-news">
            <LatestNews />
      </section>

      <section id="newsletter">
            <Newsletter />
      </section>
</template>

<style lang="scss">
#courses {
      @include bg-image('../../assets/promise-background.jpg');
}

#testimonials {
      @include bg-image('../../assets/testimonial-background.jpg');
      padding: 100px;

      .point-container {
            @include flex(row, center);

            .point {
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  border: 1px solid $medium-grey;
                  cursor: pointer;
                  margin: 5px;

                  &.point-selected {
                        background-color: $medium-grey;
                  }
            }
      }
}

#latest-news {
      @include bg-image('../../assets/latestnews-background.jpg');
      padding-bottom: 50px;
}

#newsletter {
      @include bg-image('../../assets/newsletter_background.jpg');
      padding: 60px 0;
}
</style>