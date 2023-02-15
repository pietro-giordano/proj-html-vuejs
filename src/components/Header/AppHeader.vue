<script>
import AppNav from './AppNav.vue';

export default {
      name: 'AppHeader',
      components: {
            AppNav
      },
      data() {
            return {
                  navLinks: [
                        {
                              name: 'home',
                              url: '#',
                              selected: true,
                              new: false
                        }, {
                              name: 'about',
                              url: '#',
                              selected: false,
                              new: false
                        }, {
                              name: 'prices',
                              url: '#',
                              selected: false,
                              new: false
                        }, {
                              name: 'courses',
                              url: '#',
                              selected: false,
                              new: true
                        }, {
                              name: 'location',
                              url: '#',
                              selected: false,
                              new: false
                        }, {
                              name: 'blog',
                              url: '#',
                              selected: false,
                              new: false
                        },
                  ],
            }
      }
}
</script>

<template>
      <header>
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
                                    <AppNav :link="link" v-for="link in navLinks" />
                              </ul>

                              <button>
                                    book now
                              </button>
                        </div>
                  </div>
            </div>

            <div class="jumbotron">
                  <h1>Drive with Avada</h1>
                  <p>We offer the finest driving tuition money can buy</p>
            </div>
      </header>
</template>

<style lang="scss">
header {
      @include bg-image('../../assets/homepage-hero-background.jpg');
      height: 600px;

      .phone-contact {
            background-color: $hard-grey;

            .container {
                  @include container;
                  @include flex(row, space-between);
                  height: 35px;

                  p {
                        color: $medium-grey;
                        font-size: $little-font;
                        line-height: 35px;

                        &:last-child span {
                              padding-right: 8px;
                        }
                  }
            }
      }

      .nav-bar {
            background-color: rgba($color: $hard-grey, $alpha: 0.5);
            // @include fixed;

            .container {
                  @include container;
                  @include flex(row, space-between, center);
                  height: 95px;

                  div:last-child {
                        @include flex;

                        ul {
                              @include flex(row, space-between, center);

                              a {
                                    text-transform: uppercase;
                                    font-weight: bold;
                                    color: white;
                                    padding: 5px 0;
                                    font-size: $medium-font;
                                    margin-right: 35px;

                                    &.active {
                                          color: $main-green;
                                          border-bottom: 2px solid $main-green;
                                    }

                                    span {
                                          background-color: $main-green;
                                          font-size: $little-font;
                                          padding: 3px;
                                          border-radius: 5px;
                                    }
                              }
                        }

                        button {
                              @include button;
                        }
                  }
            }
      }

      .jumbotron {
            @include container;
            @include flex(column, center, flex-start);
            height: 470px;
            color: white;

            >* {
                  padding: 8px 0;
            }

            h1 {
                  font-size: $biggest-font;
            }

            p {
                  font-size: 1.3rem;
            }
      }
}
</style>