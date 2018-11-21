<template>
  <div class="container">
    <canvas id="ban" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
export default {
  name: 'ban',
  data () {
    return {
      width: 100,
      height: 100,
      dots: {
        nb: 250,
        distance: 100,
        d_radius: 150,
        array: []
      }
    }
  },
  computed: {
    mousePosition: function () {
      return {
        x: 30 * this.width / 100,
        y: 30 * this.height / 100
      }
    }
  },
  created () {

  },
  mounted () {
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.width = document.body.clientWidth
    this.height = document.body.clientHeight
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx.lineWidth = 0.3
    this.ctx.strokeStyle = (this.Color(150)).style
    let that = this
    this.canvas.addEventListener('mousemove', function (e) {
      that.mousePosition.x = e.pageX
      that.mousePosition.y = e.pageY
    })

    this.canvas.addEventListener('mouseleave', function (e) {
      that.mousePosition.x = that.canvas.width / 2
      that.mousePosition.y = that.canvas.height / 2
    })

    this.createDots()
    requestAnimationFrame(this.animateDots)
  },
  methods: {
    colorValue (min) {
      return Math.floor(Math.random() * 255 + min)
    },
    createColorStyle (r, g, b) {
      return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)'
    },
    mixComponents (comp1, weight1, comp2, weight2) {
      return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2)
    },
    averageColorStyles (dot1, dot2) {
      let color1 = dot1.color
      let color2 = dot2.color

      let r = this.mixComponents(color1.r, dot1.radius, color2.r, dot2.radius)
      let g = this.mixComponents(color1.g, dot1.radius, color2.g, dot2.radius)
      let b = this.mixComponents(color1.b, dot1.radius, color2.b, dot2.radius)
      return this.createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b))
    },
    Color (min) {
      min = min || 0
      let r = this.colorValue(min)
      let g = this.colorValue(min)
      let b = this.colorValue(min)
      let style = this.createColorStyle(r, g, b)
      return {
        r: r,
        g: g,
        b: b,
        style: style
      }
    },
    Dot () {
      let x = Math.random() * this.width
      let y = Math.random() * this.height
      let vx = -0.5 + Math.random()
      let vy = -0.5 + Math.random()
      let radius = Math.random() * 2
      let color = this.Color()
      return {
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        radius: radius,
        color: color,
        draw: function (ctx) {
          ctx.beginPath()
          ctx.fillStyle = this.color.style
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI, false)
          ctx.fill()
        }
      }
    },
    createDots () {
      for (let i = 0; i < this.dots.nb; i++) {
        this.dots.array.push(this.Dot())
      }
    },
    moveDots () {
      for (let i = 0; i < this.dots.nb; i++) {
        var dot = this.dots.array[i]
        if (dot.y < 0 || dot.y > this.canvas.height) {
          dot.vx = dot.vx
          dot.vy = -dot.vy
        } else if (dot.x < 0 || dot.x > this.canvas.width) {
          dot.vx = -dot.vx
          dot.vy = dot.vy
        }
        dot.x += dot.vx
        dot.y += dot.vy
      }
    },
    connectDots () {
      for (let i = 0; i < this.dots.nb; i++) {
        for (let j = 0; j < this.dots.nb; j++) {
          let idot = this.dots.array[i]
          let jdot = this.dots.array[j]

          if ((idot.x - jdot.x) < this.dots.distance && (idot.y - jdot.y) < this.dots.distance && (idot.x - jdot.x) > -this.dots.distance && (idot.y - jdot.y) > -this.dots.distance) {
            if ((idot.x - this.mousePosition.x) < this.dots.d_radius && (idot.y - this.mousePosition.y) < this.dots.d_radius && (idot.x - this.mousePosition.x) > -this.dots.d_radius && (idot.y - this.mousePosition.y) > -this.dots.d_radius) {
              this.ctx.beginPath()
              this.ctx.strokeStyle = this.averageColorStyles(idot, jdot)
              this.ctx.moveTo(idot.x, idot.y)
              this.ctx.lineTo(jdot.x, jdot.y)
              this.ctx.stroke()
              this.ctx.closePath()
            }
          }
        }
      }
    },
    drawDots () {
      for (let i = 0; i < this.dots.nb; i++) {
        var dot = this.dots.array[i]
        dot.draw(this.ctx)
      }
    },
    animateDots () {
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.moveDots()
      this.connectDots()
      this.drawDots()

      requestAnimationFrame(this.animateDots)
    }
  }
}

</script>

<style lang="scss" scoped>
.container{
  height:100%;
  width:100%;
}
</style>
