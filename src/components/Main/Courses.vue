<script>
import CircleBar from './CircleBar.vue';

export default {
      name: 'Courses',
      components: {
            CircleBar
      },
      data() {
            return {
                  coursesOption: [
                        {
                              name: 'Pass Plus',
                              img: 'courses-passplus-400x399.jpg'
                        }, {
                              name: 'Intensive Course',
                              img: 'course-intensive-400x399.jpg'
                        }, {
                              name: 'Instructors',
                              img: 'courses-instructor-400x400.jpg'
                        },
                  ],
                  rate: [
                        {
                              name: 'pass rate',
                              percent: '95'
                        }, {
                              name: 'referral rate',
                              percent: '100'
                        }, {
                              name: 'accident rate',
                              percent: '0'
                        },
                  ]
            }
      },
      methods: {

            getImgPath: function (imgPath) {
                  return new URL(imgPath, import.meta.url).href;
            }
      }
}
</script>

<template>
      <div class="courses">
            <div class="container">
                  <div class="courses-card">
                        <img src="../../assets/new-corner.jpg" alt="">

                        <h2>Courses</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi esse quaerat,
                              voluptatibus dolores iusto ratione excepturi tempore, et natus voluptatem facilis rerum
                              quisquam
                              delectus.</p>

                        <button>course information</button>
                  </div>

                  <div class="learn-more">
                        <div class="card" v-for="card in coursesOption">
                              <img :src="getImgPath(`../../assets/${card.img}`)" alt="">
                              <h4>{{ card.name }}</h4>
                              <button>learn more</button>
                        </div>
                  </div>
            </div>
      </div>

      <div class="rate">
            <img src="../../assets/driving-triangle.svg" alt="">

            <div class="container">

                  <CircleBar :data="card" v-for="card in rate" />

            </div>
      </div>
</template>

<style lang="scss" scoped>
.courses {
      @include bg-image('../../assets/promise-background.jpg', cover, bottom);

      .container {
            @include container;
            @include flex(row, space-between);
            padding: 60px 0;
      }

      .courses-card {
            @include flex(column, flex-start, center);
            @include card;
            width: 36%;
            padding: 45px 35px;
            position: relative;
            bottom: 80px;

            img {
                  width: 65px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  border-top-left-radius: 8px;
            }

            h2 {
                  font-size: $h2-font;
                  color: $hard-grey;
            }

            p {
                  color: $medium-grey;
                  font-size: $medium-font;
                  line-height: 1.8rem;
                  padding: 30px 0;
            }

            button {
                  @include button;
            }
      }

      .learn-more {
            @include flex(row, space-between);
            width: 60%;

            .card {
                  @include flex(column, flex-start, center);
                  width: 30%;

                  img {
                        width: 100%;
                  }

                  h4 {
                        color: $metal-grey;
                        padding: 15px 0 10px;
                  }

                  button {
                        @include button(8px 16px, $metal-grey, none, 3px solid $metal-grey);
                        font-size: $little-font;
                        font-weight: bold;

                        &:hover {
                              @include button(8px 16px, $main-green, none, 3px solid $main-green);
                        }
                  }
            }
      }
}

.rate {

      img {
            width: 100%;
            height: 100px;
      }

      .container {
            @include container;
            @include flex(row, space-between);
            position: relative;
            bottom: 110px;
      }
}
</style>