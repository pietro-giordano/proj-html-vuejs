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
      <div class="nav">
            <div class="phone-contact">
                  <div class="container">
                        <p>We have a 95% Successful Pass Rate!</p>

                        <p>
                              <span><font-awesome-icon icon="fa-solid fa-phone-flip" /></span>
                              Give has a call to book your tuition! 1-800-555-555
                        </p>
                  </div>
            </div>

            <div class="nav-bar">
                  <div class="container">
                        <div>
                              <img src="../../assets/avada-drivers-logo-2x-200x39.png" alt="Avada Logo">
                        </div>

                        <div>
                              <ul>
                                    <li v-for="(link, index) in store.navLinks">
                                          <a :class="store.navLinks[index].selected ? 'active' : ''" :href="link.url">
                                                {{ link.name }}
                                                <span v-if="store.navLinks[index].new">new</span>
                                          </a>
                                    </li>
                              </ul>

                              <button>
                                    book now
                              </button>
                        </div>
                  </div>
            </div>
      </div>
</template>

<style lang="scss" scoped>

</style>