<script>
export default {
      name: 'FirstLesson',
}
</script>

<template>
      <div class="first-lesson">
            <div>
                  <h2>Get Behind The Wheel</h2>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in quidem dignissimos voluptates
                        maiores ea eaque amet dicta soluta at aliquid, suscipit ullam autem, quos ab officia natus!
                        Saepe, commodi.</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto ipsa vitae, officia
                        nulla quaerat voluptate id nemo harum consequatur laborum perspiciatis quod possimus ratione
                        eveniet hic voluptatibus modi esse repellat pariatur sapiente officiis iusto a aliquam. In,
                        sapiente aliquid alias, quas qui, accusantium excepturi ut dignissimos perspiciatis atque
                        dolores!</p>
            </div>

            <div class="card">
                  <h3>First Lesson Free!</h3>

                  <p>When you making a block booking with us your first lesson is included free.</p>

                  <form action="">
                        <input type="text" placeholder="Your Name*" required>
                        <input type="email" placeholder="Email*" required>
                        <input type="tel" placeholder="Telephone">
                        <input type="text" placeholder="Location">
                  </form>

                  <button>request a callback</button>
            </div>
      </div>

      <div class="start-today">
            <div class="container">
                  <div>
                        <h2>Start Learning to Drive Today</h2>
                        <p>Give us a call to schedule your first driving lesson</p>
                  </div>

                  <div>
                        <span><font-awesome-icon icon="fa-solid fa-phone-flip" /></span>
                        1-800-555-555
                  </div>
            </div>
      </div>
</template>

<style lang="scss" scoped>
.first-lesson {
      @include container;
      @include flex;

      div {
            &:first-child {
                  width: 55%;
                  margin-top: 80px;
                  padding-right: 30px;

                  h2 {
                        font-size: $h2-font;
                        color: $hard-grey;
                        margin-bottom: 25px;
                  }

                  p {
                        color: $medium-grey;
                        line-height: 1.8rem;
                        margin-bottom: 20px;

                        &:last-child {
                              font-size: $medium-font;
                              line-height: 1.5rem;
                        }
                  }
            }

            &:last-child {
                  @include flex(column, flex-start, center);
                  background-color: white;
                  width: 45%;
                  padding: 35px;
                  position: relative;
                  bottom: 30px;
                  box-shadow: $box-shadow-light;
                  border-radius: 8px;
                  margin-bottom: 30px;

                  h3 {
                        font-size: $h3-font;
                        color: $main-green;
                        margin-bottom: 30px;
                  }

                  p {
                        text-align: center;
                        font-size: $medium-font;
                        color: $medium-grey;
                        line-height: 1.5rem;
                        padding-bottom: 15px;
                  }

                  form {
                        @include flex(column);
                        width: 100%;

                        input {
                              @include input;
                              margin: 10px 0;
                        }
                  }

                  button {
                        @include button;
                        margin: 15px 0 20px;
                  }
            }
      }
}

.start-today {
      @include bg-image('../../assets/horizontal-cta-background.jpg');

      .container {
            @include container;
            @include flex(row, space-between, center);
            padding: 60px 0;
            color: white;

            h2 {
                  font-size: $h2-font;
            }

            p {
                  font-weight: bold;
                  padding: 5px 0;
            }

            div:last-child {
                  padding-right: 50px;
                  font-size: $h3-font;

                  span {
                        padding-right: 15px;
                  }
            }
      }
}
</style>