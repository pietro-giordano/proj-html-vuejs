<script>
export default {
      name: 'Instructors',
      data() {
            return {
                  instructors: [
                        {
                              name: 'Mike Hart',
                              photo: 'instructor-mikehart-600x381.jpg'
                        }, {
                              name: 'John Smith',
                              photo: 'instructor-johnsmith-600x381.jpg'
                        }, {
                              name: 'Angela Hart',
                              photo: 'instructor-angelahart-600x381.jpg'
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
      <div class="container">
            <div>
                  <h2>Your Instructors</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, magnam facilis mollitia sint
                        laboriosam reiciendis! Eligendi ea assumenda dolorum obcaecati?</p>
            </div>

            <div>
                  <button>more about us</button>
            </div>
      </div>

      <div class="instructors">
            <div class="card-instructor" v-for="instructor in instructors">
                  <img :src="getImgPath(`../../assets/${instructor.photo}`)" :alt="instructor.name">
                  <h3>{{ instructor.name }}</h3>
                  <div>
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, in!</p>
            </div>
      </div>
</template>

<style lang="scss" scoped>
.container {
      @include container;
      @include flex(row, space-between, center);

      div:first-child {
            width: 65%;

            h2 {
                  font-size: $h2-font;
                  color: $hard-grey;
            }

            p {
                  line-height: 1.8rem;
                  color: $medium-grey;
                  padding: 30px 0 10px;
            }
      }

      div:last-child {
            width: 32%;

            button {
                  @include button;
                  width: 100%;
            }
      }
}

.instructors {
      @include container;
      @include flex(row, space-between);

      .card-instructor {
            @include card($box-shadow-medium, 5px solid $main-green);
            width: 33%;
            text-align: center;
            padding: 30px;
            position: relative;
            top: 50px;

            img {
                  width: 100%;
                  padding-bottom: 25px;
            }

            h3 {
                  color: $hard-grey;
            }

            div>* {
                  padding: 10px;
                  color: $medium-grey;
            }

            p {
                  line-height: 1.5rem;
                  color: $medium-grey;
                  font-size: $medium-font;
            }
      }
}
</style>