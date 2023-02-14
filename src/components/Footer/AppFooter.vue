<script>
export default {
      name: 'AppFooter',
      data() {
            return {
                  contacts: [
                        {
                              contact: '12345 North Main Street, New York, NY 555555',
                              url: '',
                              icon: "fa-solid fa-house-chimney"
                        }, {
                              contact: '1.800.555.6789',
                              url: '',
                              icon: "fa-solid fa-phone-flip"
                        }, {
                              contact: 'info@your-domain.com',
                              url: '',
                              icon: "fa-regular fa-envelope"
                        }, {
                              contact: 'Theme-Fusion.com',
                              url: '',
                              icon: "fa-solid fa-link"
                        },
                  ],
                  courses: [
                        {
                              name: 'Pass Plus',
                              url: '',
                        }, {
                              name: 'Intensive Course',
                              url: '',
                        }, {
                              name: 'Automatic',
                              url: '',
                        }, {
                              name: 'Instructor training',
                              url: '',
                        },
                  ]
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

                  <div class="contacts">
                        <h4>Contact details</h4>
                        <ul>
                              <li v-for="contact in contacts">
                                    <font-awesome-icon :icon=contact.icon />
                                    <a :href="contact.url">{{ contact.contact }}</a>
                              </li>
                        </ul>
                  </div>

                  <div class="courses">
                        <h4>Courses</h4>
                        <ul>
                              <li v-for="course in courses">
                                    <font-awesome-icon icon="fa-regular fa-circle-right" />
                                    <a :href="course.url">{{ course.name }}</a>
                              </li>
                        </ul>
                  </div>

                  <div class="grid">
                        <img src="../../assets/footer-ad-grid-400x357.png" alt="">
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
            @include flex(row, space-between);
            padding: 60px 0;

            div {
                  width: calc((100% / 4) - 20px);
                  color: $medium-grey;
                  line-height: 1.3rem;

                  &:first-child {
                        font-size: $little-font;
                  }

                  &:first-child img {
                        width: 80%;
                  }

                  &.contacts,
                  &.courses {

                        li {
                              margin: 8px 0;
                              @include flex;

                              a {
                                    padding-left: 10px;

                                    &:hover {
                                          text-decoration: underline;
                                    }
                              }
                        }
                  }

                  &.contacts {
                        a {
                              color: $medium-grey;
                              font-size: $little-font;
                        }
                  }

                  &.courses {
                        color: $main-green;

                        a {
                              color: $main-green;
                              font-size: $medium-font;
                        }
                  }

                  &.grid {
                        @include flex(column, flex-start, center);

                        img {
                              width: 100%;
                              margin-bottom: 20px;
                        }

                        button {
                              @include button;
                        }
                  }

                  h4 {
                        font-size: $medium-font;
                        text-transform: uppercase;
                        color: white;
                        margin-bottom: 1rem;
                  }
            }
      }

      .footer-down {
            padding: 50px 0;
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