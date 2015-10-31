// App 组件
let App = React.createClass({
  // `render` 方法将生成 `buyshoes` 网页的 Virtual DOM。
  render: function() {
    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>
        <div className="site__main">
          <div className="site__left-sidebar">
            <SiteTitle/>
          </div>
          <div className="site__content">
            <Products/>
          </div> {/* site__content */}
        </div> {/* site__main */}
        <div className="site__right-sidebar">
          <Cart/>
          {/* <Checkout/> */}
        </div> {/* site__right-sidebar */}
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );
  },
  renderBackground(){
    return(
      <div className="bg">
            <div className="bg__img"></div>
      </div>
    )
  },
});

let SiteTitle = React.createClass({
  render: function() {
    return (
      <div class="title">
        <h2>Buy Me Shoes</h2>
        <img class="title__heart" src="img/heart.svg"/>
      </div>
    );
  }
});



window.onload = () => {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(<App/>,document.querySelector("#root"));
}
