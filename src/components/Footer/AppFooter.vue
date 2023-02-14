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
            <div class="footer-up">
                  <div>
                        <img src="../../assets/avada-drivers-logo-1x.png" alt="">
                        <p>Avada Driving School is the right choice for experienced drivers looking for a refresher
                              course, or the brand new driver wanting to pass first time.</p>
                  </div>

                  <div>

                  </div>

                  <div>

                  </div>

                  <div>
                        <img src="../../assets/footer-ad-grid-200x178.png" alt="">
                        <button>book now</button>
                  </div>
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
      @include bg-image('../../assets/footer-background-color.jpg');

      .footer-up {
            @include container;
            @include flex;
            height: 400px;

            div {
                  width: calc(100% / 4);
                  border: 2px solid black;
                  font-size: $little-font;
                  color: $medium-grey;

                  img {
                        display: block !important;
                        width: 100%;
                  }

                  button {
                        @include button;
                  }
            }
      }

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