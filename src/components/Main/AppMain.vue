<script>
import FirstLesson from './FirstLesson.vue';
import Courses from './Courses.vue';
import Testimonials from './Testimonials.vue';
import LatestNews from './LatestNews.vue';
import Newsletter from './Newsletter.vue';
import Instructors from './Instructors.vue';

export default {
      name: 'AppMain',
      components: {
            FirstLesson,
            Courses,
            Testimonials,
            LatestNews,
            Newsletter,
            Instructors
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
                              text: 'Gestisci la tua autoscuola in modo semplice ed efficiente. La piattaforma per autoscuole ti garantisce il pieno controllo di lezioni, guide, quiz e l’organizzazione del Calendario e di ogni attività della tua scuola guida.',
                              selected: false
                        }, {
                              name: 'Harold White',
                              photo: 'testimonial-harold.png',
                              text: 'Gli insegnanti possono fare lezione in modo interattivo, grazie a slide con quiz ministeriali correlati, manuale di teoria, schede personalizzate e statistiche per monitorare l’apprendimento.',
                              selected: false
                        }, {
                              name: 'Kate Middleton',
                              photo: 'testimonial-kate.png',
                              text: 'Fai lezione in modo coinvolgente ed esperenziale e cattura l’attenzione dei tuoi allievi, grazie al supporto del Tagbook, il primo libro interattivo, e alle avanzate tecnologie di VR e AR, sviluppate da Guida e Vai.',
                              selected: false
                        }, {
                              name: 'Kelly Clarkson',
                              photo: 'testimonial-kelly.png',
                              text: 'Gli insegnanti possono sbloccare gli approfondimenti video sull’App Quiz Patente Ufficiale e inviare i Messaggi Automatici per comunicare in tempo reale con gli allievi.',
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
      <FirstLesson />

      <Courses />

      <Instructors />

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
#testimonials {
      @include bg-image('../../assets/testimonial-background.jpg');
      padding: 150px 0 100px;

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