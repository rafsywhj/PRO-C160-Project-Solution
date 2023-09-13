AFRAME.registerComponent("tour", {
  schema: {
    state: { type: "string", default: "places-list" },
    selectedPlace: { type: "string", default: "#card1" },
    zoomAspectRatio: { type: "number", default: 1 }
  },
  init: function() {
    this.placesContainer = this.el;
    this.cameraEl = document.querySelector("#camera");
    this.createPlace();
  },
  tick: function() {
    const { state } = this.el.getAttribute("tour");

    if (state === "view") {
      this.hideEl([this.placesContainer]);
      this.showView();
    }
  },
  hideEl: function(elList) {
    elList.map(el => {
      el.setAttribute("visible", false);
    });
  },
  createPlace: function() {
    const details = {
      // write code here..............














      
     
    };

    for (var key in details) {
      const item = details[key];
      // Thubnail Element
      const thumbNail = this.createThumbNail(item);
      // Title
      const title = this.createTitleEl(item);
      thumbNail.appendChild(title);
      this.placesContainer.appendChild(thumbNail);
    }
  },

  createThumbNail: function(item) {
    const entityEl = document.createElement("a-entity");

// write code here.........








    
    return entityEl;
  },
  createTitleEl: function(item) {
    const entityEl = document.createElement("a-entity");
    const id = `title-${item.id}`;
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 50,
      color: "#e91e63",
      value: item.title
    });
    const position = { x: 0, y: -4, z: 0 };
    entityEl.setAttribute("position", position);

    if (item.title === "Main Gate") {
      entityEl.setAttribute("rotation", { x: 180, y: 180, z: 0 });
      entityEl.setAttribute("position", { x: 0, y: 4, z: 0 });
    }
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
  showView: function() {
    const { selectedPlace } = this.data;
    const skyEl = document.querySelector("#main-container");
    skyEl.setAttribute("material", {
      src: `./assets/360_images/${selectedPlace}.jpg`,
      color: "#fff"
    });
  },
  update: function() {
    window.addEventListener("keydown", e => {
      if (e.key === "ArrowUp") {
        if (this.data.zoomAspectRatio <= 10) {
          this.data.zoomAspectRatio += 0.002;
          this.cameraEl.setAttribute("zoom", this.data.zoomAspectRatio);
        }
      }
      if (e.key === "ArrowDown") {
        if (this.data.zoomAspectRatio > 1) {
          this.data.zoomAspectRatio -= 0.002;
          this.cameraEl.setAttribute("zoom", this.data.zoomAspectRatio);
        }
      }
    });
  }
});
