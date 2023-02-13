<script>
import { store } from '../../store';

export default {
      name: 'AppNav',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>
      <div class="phone-contact">
            <div class="container">
                  <p>We have a 95% Successful Pass Rate!</p>

                  <p>
                        <span><font-awesome-icon icon="fa-solid fa-phone-flip" /></span>
                        Give has a call to book your tuition! 1-800-555-555
                  </p>
            </div>
      </div>

      <div class="nav">
            <div class="container">
                  <div>
                        <img src="../../assets/avada-drivers-logo-2x-200x39.png" alt="Avada Logo">
                  </div>

                  <div>
                        <ul>
                              <li>

                              </li>
                        </ul>

                        <button>
                              book now
                        </button>
                  </div>
            </div>
      </div>
</template>

<style lang="scss" scoped>
.phone-contact {
      background-color: $hard-grey;

      .container {
            @include container;
            @include flex(row, space-between);

            p {
                  color: $medium-grey;
                  font-size: 0.6rem;
                  padding: 0.6rem 0;
            }
      }
}

.nav {
      background-color: aquamarine;

      .container {
            @include container;
            @include flex(row, space-between, center);
            height: 100px;

            div:last-child {
                  @include flex;

                  button {
                        @include button;
                  }
            }
      }
}
</style>