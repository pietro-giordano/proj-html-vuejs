<script>
import AppNav from './AppNav.vue';
import AppJumbotron from './AppJumbotron.vue';

export default {
      name: 'AppHeader',
      components: {
            AppNav,
            AppJumbotron
      }
}
</script>

<template>
      <header>
            <AppNav />

            <AppJumbotron />
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
                        font-size: 0.6rem;
                        line-height: 35px;
                  }
            }
      }

      .nav-bar {
            background-color: rgba($color: $hard-grey, $alpha: 0.5);

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
                                    font-size: 0.8rem;
                                    margin-right: 35px;

                                    &.active {
                                          color: $main-green;
                                          border-bottom: 2px solid $main-green;
                                    }

                                    span {
                                          background-color: $main-green;
                                          font-size: 0.6rem;
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
                  font-size: 3rem;
            }

            p {
                  font-size: 1.3rem;
            }
      }
}
</style>