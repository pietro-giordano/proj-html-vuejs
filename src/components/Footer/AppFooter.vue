<script>
export default {
      name: 'AppFooter',
      data() {
            return {

            }
      }
}
</script>

<template>
      <footer>
            <div>

            </div>

            <div class="footer-down">
                  <div>
                        <p>
                              Copyright 2012 - 2020 | Avada Theme by <span>ThemeFusion</span> | All right reserved |
                              Powered
                              by <span>WordPress</span>
                        </p>

                        <ul>
                              <li>
                                    <a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                              </li>
                              <li>
                                    <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                              </li>
                              <li>
                                    <a href=""><font-awesome-icon icon="fa-brands fa-youtube" /></a>
                              </li>
                              <li>
                                    <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                              </li>
                        </ul>
                  </div>
            </div>
      </footer>
</template>

<style lang="scss" scoped>
footer {
      .footer-down {
            height: 120px;
            background-color: black;

            div {
                  @include container;
                  @include flex(row, space-between, center);
                  height: 100%;

                  p {
                        color: $medium-grey;
                        font-size: $little-font;

                        span {
                              color: $main-green;
                        }
                  }

                  ul {
                        @include flex;

                        a {
                              color: white;
                              padding: 5px;
                              margin-left: 5px;
                        }
                  }
            }
      }
}
</style>