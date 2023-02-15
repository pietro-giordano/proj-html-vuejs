<script>







export default {
      name: 'CircleBar',
      props: {
            data: Object
      },
      computed: {

            getPercent() {
                  let circumference = 2 * 3.14 * 100;
                  return (circumference / 100) * this.data.percent + ',' + circumference;
            }
      }
}
</script>

<template>
      <div class="card-rate">
            <div class="circle">
                  <svg>
                        <circle cx="50%" cy="50%" r="100" />
                        <circle cx="50%" cy="50%" r="100" :stroke-dasharray="getPercent" />
                        <!-- Stroke length = (Circumference / 100) * Percentage to fill -->
                  </svg>
                  <span>{{ data.percent }}%</span>
            </div>
            <p> {{ data.name }}</p>
</div>
</template>

<style lang="scss" scoped>
.card-rate {
      @include card($box-shadow-light, $border-top: 5px solid $main-green);
      @include flex(column, flex-start, center);
      width: 33%;
      padding: 30px 0 60px;

      .circle {
            width: 220px;
            height: 220px;
            position: relative;

            svg {
                  width: 100%;
                  height: 100%;

                  circle:first-child {
                        fill: rgba(255, 255, 255);
                        stroke: $light-grey;
                        stroke-width: 10;
                  }

                  circle:last-child {
                        fill: rgba(255, 255, 255, 0);
                        stroke: $main-green;
                        stroke-width: 10;
                        stroke-linecap: round;
                        transform: rotate(-90deg);
                        transform-origin: center;
                  }
            }

            span {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  translate: -50% -50%;
                  color: $medium-grey;
                  font-size: $biggest-font;
            }
      }

      p {
            text-transform: uppercase;
            color: $medium-grey;
            font-weight: bold;
            font-size: $medium-font;
            padding-top: 30px;
      }
}
</style>