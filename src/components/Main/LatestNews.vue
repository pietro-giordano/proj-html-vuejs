<script>
export default {
      name: 'LatestNews',
      data() {
            return {
                  blogPosts: [
                        {
                              img: 'blog-choosecar-700x441.jpg',
                              title: 'What Car to Start With?',
                              date: 'February 7th, 2019',
                              comments: '0',
                              urlComments: '',
                              text: 'lorem ipsum dolor sit amet, consectetur...'
                        }, {
                              img: 'blogpost-10and2-700x441.jpg',
                              title: 'Avada Driving School Expanding',
                              date: 'March 8th, 2019',
                              comments: '2',
                              urlComments: '',
                              text: 'lorem ipsum dolor sit amet, version two'
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
            <div class="latest">
                  <h2>Latest News</h2>

                  <div class="cards">
                        <div class="card-news" v-for="post in blogPosts">
                              <img :src="getImgPath(`../../assets/${post.img}`)" alt="">
                              <h4>{{ post.title }}</h4>
                              <p class="date">{{ post.date }} | <a :href="post.urlComments">{{ post.comments }}
                                          Comments</a></p>
                              <p class="text">{{ post.text }}</p>
                        </div>
                  </div>

                  <button>more from the blog</button>
            </div>

            <img src="../../assets/latestnews-bottom-1200x105.png" alt="">
      </div>
</template>

<style lang="scss" scoped>
.container {
      @include container;
      position: relative;
      top: -30px;

      .latest {
            @include flex(column, center, center);
            background-color: white;
            padding: 60px 50px 10px;
            width: 100%;

            h2 {
                  font-size: 2rem;
                  color: $hard-grey;
                  text-align: center;
                  margin-bottom: 50px;
            }

            .cards {
                  @include flex(row, space-between);

                  .card-news {
                        width: calc((100% / 2) - 15px);
                        text-align: center;
                        color: $medium-grey;

                        img {
                              width: 100%;
                        }

                        h4 {
                              color: $main-green;
                              padding: 10px 0 5px;
                        }

                        .date {
                              font-size: $little-font;

                              a {
                                    color: $main-green;
                                    text-decoration: none;

                                    &:hover {
                                          text-decoration: underline;
                                    }
                              }
                        }

                        .text {
                              font-size: $medium-font;
                              padding: 15px;
                        }
                  }
            }

            button {
                  @include button;
                  margin-top: 40px;
            }
      }

      img {
            width: 100%;
      }
}
</style>