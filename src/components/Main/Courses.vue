<script>
export default {
      name: 'Courses',
}
</script>

<template>
      <div class="courses">
            <div class="courses-card">
                  <img src="../../assets/new-corner.jpg" alt="">

                  <h2>Courses</h2>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi esse quaerat,
                        voluptatibus dolores iusto ratione excepturi tempore, et natus voluptatem facilis rerum quisquam
                        delectus.</p>

                  <button>course information</button>
            </div>

            <div class="learn-more">

            </div>
      </div>

      <div class="rate">

      </div>
</template>

<style lang="scss">
.courses {
      @include container;
      @include flex(row, space-between);
      padding: 60px 0;

      .courses-card {
            @include flex(column, flex-start, center);
            width: 36%;
            padding: 45px 35px;
            box-shadow: $box-shadow-medium;
            border-radius: 8px;
            background-color: white;
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
            height: 300px;
            width: 60%;
            border: 1px solid black;
      }
}
</style>