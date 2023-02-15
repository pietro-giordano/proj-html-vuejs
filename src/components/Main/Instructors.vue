<script>
export default {
      name: 'Instructors',
      data() {
            return {
                  instructors: [
                        {
                              name: 'Mike Hart',
                              photo: 'instructor-mikehart'
                        }, {
                              name: 'John Smith',
                              photo: 'instructor-johnsmith'
                        }, {
                              name: 'Angela Hart',
                              photo: 'instructor-angelahart'
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
            <div class="card-instructor" v-for="(instructor, index) in instructors">
                  <div class="photo-container">
                        <img :src="getImgPath(`../../assets/${instructor.photo}.jpg`)" :alt="instructor.name"
                              :class="(index % 2 != 0) ? 'middle' : ''">
                        <span class="tooltip">{{ instructor.photo }}</span>
                  </div>
                  <h3>{{ instructor.name }}</h3>
                  <div class="instructor-contact">
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
      @include flex(row, space-between, flex-start);

      .card-instructor {
            @include card($box-shadow-medium, 5px solid $main-green);
            width: 33%;
            text-align: center;
            padding: 30px;
            position: relative;
            top: 50px;

            .photo-container {
                  width: 100%;
                  padding-bottom: 25px;
                  position: relative;

                  img {
                        width: 100%;
                        display: inline-block;

                        &.middle {
                              height: 180px;
                        }
                  }

                  .tooltip {
                        visibility: hidden;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        background: white;
                        border: 1px solid black;
                        font-size: $little-font;
                        padding: 3px;
                  }

                  &:hover .tooltip {
                        visibility: visible;
                  }
            }

            h3 {
                  color: $hard-grey;
            }

            .instructor-contact>* {
                  padding: 10px;
                  color: $medium-grey;
                  cursor: pointer;
            }

            p {
                  line-height: 1.5rem;
                  color: $medium-grey;
                  font-size: $medium-font;
            }
      }
}
</style>