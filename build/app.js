// App 组件
"use strict";

var App = React.createClass({
  displayName: "App",

  // `render` 方法将生成 `buyshoes` 网页的 Virtual DOM。
  render: function render() {
    return React.createElement(
      "div",
      { className: "site" },
      React.createElement(
        "div",
        { className: "bg" },
        React.createElement("div", { className: "bg__img" })
      ),
      React.createElement(
        "div",
        { className: "site__main" },
        React.createElement(
          "div",
          { className: "site__left-sidebar" },
          React.createElement(SiteTitle, null)
        ),
        React.createElement(
          "div",
          { className: "site__content" },
          React.createElement(Products, null)
        ),
        " "
      ),
      " ",
      React.createElement(
        "div",
        { className: "site__right-sidebar" },
        React.createElement(Cart, null),
        React.createElement(Checkout, null)
      ),
      " ",
      React.createElement(
        "a",
        { className: "site__right-sidebar-toggle" },
        React.createElement("img", { src: "img/arrow-icon.svg" })
      )
    );
  },
  renderBackground: function renderBackground() {
    return React.createElement(
      "div",
      { className: "bg" },
      React.createElement("div", { className: "bg__img" })
    );
  }
});

var SiteTitle = React.createClass({
  displayName: "SiteTitle",

  render: function render() {
    return React.createElement(
      "div",
      { "class": "title" },
      React.createElement(
        "h2",
        null,
        "Buy Me Shoes"
      ),
      React.createElement("img", { "class": "title__heart", src: "img/heart.svg" })
    );
  }
});

var products = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man"
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man"
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man"
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man"
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman"
  }
};

var Products = React.createClass({
  displayName: "Products",

  render: function render() {
    var product = {
      name: "Jameson Vulc",
      price: 64.99,
      imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
      gender: "man"
    };

    return React.createElement(
      "div",
      { className: "products" },
      React.createElement(Product, { product: product })
    );
  }
});

var Product = React.createClass({
  displayName: "Product",

  render: function render() {
    // 这个组件需要 `product` 属性。
    var _props$product = this.props.product;
    var name = _props$product.name;
    var price = _props$product.price;
    var imagePath = _props$product.imagePath;

    return React.createElement(
      "div",
      { className: "product " },
      this.renderDisplay(price, imagePath),
      this.rededDesc(name)
    );
  },
  renderDisplay: function renderDisplay(price, imagePath) {
    var item = cartItems[this.props.product.id];
    var opt = item ? React.createElement(QuantityControl, { item: item, variant: "gray" }) : React.createElement(
      "a",
      { className: "product_add" },
      React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
    );
    return React.createElement(
      "div",
      { className: "product__display" },
      React.createElement(
        "div",
        { className: "product__img-wrapper" },
        React.createElement("img", { className: "product__img", src: imagePath })
      ),
      opt,
      React.createElement(
        "div",
        { className: "product__price" },
        price
      )
    );
  },
  renderDesc: function renderDesc(name) {
    return React.createElement(
      "div",
      { className: "product__description" },
      React.createElement(
        "div",
        { className: "product__name" },
        name
      ),
      React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
    );
  }
});

window.onload = function () {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(React.createElement(App, null), document.querySelector("#root"));
};
/* site__content */ /* site__main */ /* site__right-sidebar */
