var app2 = new Vue({
  el: "#app-2",
  mounted: function () {
    this.operator;
    this.corners();
    var parent = this;
    var i = 0;

    loop();

    function loop() {
      parent.operator();

      try {
        var box = document.getElementById(parent.startx + "," + parent.startY);
        box.style.backgroundColor = "#7090ea";
        box.style.color = "white";
        box.innerHTML += i;
        box.setAttribute("rel", i);
      } catch {}

      parent.printxyCorners();
      parent.corners(i);

      setTimeout(function () {
        if (i < 52) {
          i++;
          loop();
        }
      }, 25);
    }
  },
  methods: {
    move: function (event) {
      if (this.startx < 6) {
        this.startx++;
        this.printxy();
      } else if (this.startx == 6 && this.startY == 6) {
        this.startY--;
        this.printxy();
      } else if (this.startx == 6 && this.startY > 1) {
        this.startY--;
        this.printxy();
      } else if (this.startx == 6 && this.startY == 1) {
        this.startx = this.startx + 2;
        this.printxy();
      } // =================================
      else if (this.startx == 8 && this.startY < 6 && this.startY <= 5) {
        this.printxy();
        this.startY++;
      } else if (this.startx == 8 && this.startY == 6) {
        this.startx++;
        this.printxy();
      } else if (this.startx < 13 && this.startY == 6) {
        this.startx++;
        this.printxy();
      } else if (this.startx == 13 && this.startY == 6) {
        this.startY = this.startY + 2;
        this.printxy();
      } // =================================
      else if (this.startx > 8 && this.startY == 8) {
        this.printxy();
        this.startx--;
      } else if (this.startx == 8 && this.startY == 8) {
        this.startY++;
        this.printxy();
      } else if (this.startx == 8 && this.startY < 13) {
        this.startY++;
        this.printxy();
      } else if (this.startx == 8 && this.startY == 13) {
        this.startx = this.startx - 2;
        // console.log(this.startx, this.startY);
      }
    },
    corners: function (i) {
      // is in home ...
      var homeArr = [66, 67, 68, 77, 78, 79, 86, 87, 88];
      var pos = this.startx + ":" + this.startY;
      console.log(pos);
      switch (pos) {
        case "1:8": // y--
          this.operator = this.yminus;
          this.printxyCorners();
          break;
        case "1:6": // x++
          this.operator = this.xplus;
          this.printxyCorners();
          break;
        case "6:1": // x++
          this.printxyCorners();
          this.operator = this.xplus;
          break;
        case "8:1": // y++
          this.operator = this.yplus;
          break;
        case "13:6": // y++
          this.operator = this.yplus;
          break;
        case "13:8": // x--
          this.operator = this.xminus;
          break;
        case "6:13": // y--
          this.operator = this.yminus;
          break;
        case "8:13": // x--
          this.operator = this.xminus;
          break;
        case "6:6": // y++
          this.operator = this.yminus;
          break;
        case "8:6": // y++
          this.operator = this.xplus;
          break;
        case "8:8": // y++
          this.operator = this.yplus;
          break;
        case "6:8": // x--
          this.operator = this.xminus;
          break;
        case "1:7":
          var startIndex = document.querySelectorAll('[rel="0"]')[0].id;
          if (startIndex == "13,7") {
            this.operator = this.xminus;
          }
          break;
        case "7:1":
          var startIndex = document.querySelectorAll('[rel="0"]')[0].id;
          if (startIndex == "8,2") {
            this.operator = this.yplus;
          }
          break;
        case "13:7":
          var startIndex = document.querySelectorAll('[rel="0"]')[0].id;
          if (startIndex == "12,8") {
            this.operator = this.xminus;
          }
          break;
        case "13:10":
          break;
      }
    },
    yminus: function () {
      this.startY--;
    },
    yplus: function () {
      this.startY++;
    },
    xminus: function () {
      this.startx--;
    },
    xplus: function () {
      this.startx++;
    },

    printxy: function () {
      // console.log(this.startx, this.startY);
    },
    printxyCorners: function () {
      console.log(this.startx, this.startY);
    },
  },
  data: {
    x: 13,
    y: 13,
    startx: 13,
    startY: 8,
    count: 0,
    operator: "test",
  },
});
