(() => {
  "use strict";
  function e(e, t) {
    const n = document.getElementById("car-make"),
      d = document.getElementById("car-model"),
      s = document.getElementById("car-year"),
      [i] = document.getElementsByClassName("removeBtn");
    (i.id = t),
      (n.textContent = `Make: ${e.make}`),
      (d.textContent = `Model ${e.model}`),
      (s.textContent = `Year: ${e.year}`);
  }
  window.onload = function () {
    const t = document.getElementById("submitForm"),
      n = document.getElementById("makeInput"),
      d = document.getElementById("modelInput"),
      s = document.getElementById("yearInput"),
      i = new (class {
        constructor() {
          this.list = [];
        }
        add(e) {
          this.list.push(e), this.updateDOM();
        }
        remove(e) {
          (this.list = this.list.filter((t, n) => n != e)), this.updateDOM();
        }
        updateDOM() {
          const t = document.getElementById("wishListContainer"),
            n = document.getElementById("wishList");
          n && t.removeChild(n);
          const d = document.createElement("ul");
          (d.id = "wishList"),
            d.classList.add("list-group"),
            t.appendChild(d),
            this.list.forEach((t, n) => {
              let s = document.createElement("li");
              s.classList.add("list-group-item"),
                (s.textContent = `${t.make} ${t.model}`),
                s.addEventListener("click", function () {
                  e(t, n);
                }),
                d.appendChild(s);
            });
        }
      })(),
      [o] = document.getElementsByClassName("removeBtn");
    o.addEventListener("click", function () {
      i.remove(this.id), e({ make: "", model: "", year: "" });
    }),
      t.addEventListener("submit", function (e) {
        e.preventDefault();
        let t = new (class {
          constructor(e, t, n) {
            (this.make = e), (this.model = t), (this.year = n);
          }
        })(n.value, d.value, s.value);
        i.add(t);
      });
  };
})();
