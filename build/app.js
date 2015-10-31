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
        React.createElement("div", { className: "site__left-sidebar" }),
        React.createElement("div", { className: "site__content" }),
        " "
      ),
      " ",
      React.createElement("div", { className: "site__right-sidebar" }),
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

window.onload = function () {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(React.createElement(App, null), document.querySelector("#root"));
};
/* <SiteTitle/> */ /* <Products/> */ /* site__content */ /* site__main */ /* <Cart/> */ /* <Checkout/> */ /* site__right-sidebar */
