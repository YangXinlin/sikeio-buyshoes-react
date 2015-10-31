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
          <Checkout/>
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
  },
});


let products = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man",
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man",
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man",
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man",
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman",
  },
};

let Products = React.createClass({
  render() {
    let product = {
      name: "Jameson Vulc",
      price: 64.99,
      imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
      gender: "man",
    };

    return (
      <div className="products">
        <Product product={product}/>
      </div>
    );
  },
});

let Product = React.createClass({
  render() {
    // 这个组件需要 `product` 属性。
    let {name,price,imagePath} = this.props.product;

    return (
      <div className="product ">
        {this.renderDisplay(price, imagePath)}
        {this.rededDesc(name)}
      </div>
    );
  },
  renderDisplay(price , imagePath){
    let item = cartItems[this.props.product.id];
    let opt = item ? <QuantityControl item={item} variant="gray" /> : (<a className = "product_add"><img className="product__add__icon" src="img/cart-icon.svg" /></a>);
    return (
      <div className="product__display">
        <div className="product__img-wrapper">
          <img className="product__img" src={imagePath} />
        </div>
        {opt}
        <div className="product__price">{price}</div>
      </div>
    );
  },
  renderDesc(name){
      return(
          <div className="product__description">
              <div className="product__name">{name}</div>
              <img className="product__heart" src="img/heart.svg" />
          </div>
      )
  },
});

window.onload = () => {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(<App/>,document.querySelector("#root"));
}
