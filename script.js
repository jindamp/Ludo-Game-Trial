var app2 = new Vue({
  el: "#app-2",
  mounted: function () {
    var parent = this;
    this.operator = this.nothing;
  },
  methods: {
    drawBoxColor: function (i) {
      var parent = this;
      this.operator();
      try {
        var box = document.getElementById(parent.startx + "," + parent.startY);
        $("div.active").removeClass("active");
        box.classList.add("active");
        // box.style.backgroundColor = "#7090ea";
        // box.style.color = "white";
        box.innerHTML += i;
        box.setAttribute("rel", i);
      } catch {}
    },
    move: function (i) {
      this.i++;
      this.drawBoxColor(i);
      // is in home ...
      var homeArr = [66, 67, 68, 77, 78, 79, 86, 87, 88];
      var pos = this.startx + ":" + this.startY;

      console.log(pos);
      switch (pos) {
        case "1:8":
        case "6:13":
        case "6:6":
        case "6:12":
          this.operator = this.yminus;
          this.printxyCorners();
          break;

        case "1:6":
        case "6:1":
        case "8:6":
        case "2:6": // x++
          this.operator = this.xplus;
          this.printxyCorners();
          break;

        case "8:1":
        case "13:6":
        case "8:8":
        case "8:2": // y++
          this.operator = this.yplus;
          break;

        case "13:8":
        case "8:13":
        case "6:8":
        case "12:8": // x--
          this.operator = this.xminus;
          break;

        case "1:7":
          var startIndex = document.querySelectorAll('[rel="0"]')[0].id;
          if (startIndex == "2,6") {
            this.operator = this.xplus;
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
        case "7:13":
          var startIndex = document.querySelectorAll('[rel="0"]')[0].id;
          if (startIndex == "6,12") {
            this.operator = this.yminus;
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
    nothing: () => {},
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
    startx: 8,
    startY: 2,
    count: 0,
    startPos: "2:6",
    operator: "test",
    i: 0,
  },
});
