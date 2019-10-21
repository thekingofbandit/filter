/**
  This CodeSandbox has been automatically generated using
  `codesandboxer`. If you're curious how that happened, you can
  check out our docs here: https://github.com/codesandbox/codesandboxer

  If you experience any struggles with this sandbox, please raise an issue
  on github. :)
*/
import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";

const ProductItem = ({ category, name }) => (
  <div className="category__list-item box flex-spread">
    {name}
    <div className={`category--${category} circle`} />
  </div>
);

const ProductItems = ({ state: { products, displayCategory } }) => (
  <div>
    {products
      .filter(
        ({ category }) =>
          displayCategory === category || displayCategory === "all"
      )
      .map(({ category, name }) => (
        <ProductItem
          key={`ProductItems-${name}`}
          category={category}
          name={name}
        />
      ))}
  </div>
);

const ButtonCategories = (productCategories, setCategory) =>
  productCategories.map(category => (
    <button
      key={category}
      className={`btn-${category}`}
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  ));

const UI = ({
  state,
  state: { productCategories },
  setCategory
}) => (
  <div className="box flex-row">
    <div className="box flex-col">
      <h3>Filter by Category</h3>
      {ButtonCategories(productCategories, setCategory)}
    </div>
    <div className="box flex-col">
      <h3>Results</h3>
      <ProductItems state={state} />
    </div>
  </div>
);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "all",
      products: props.products,
      productCategories: props.productCategories
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }
  render() {
    return <UI setCategory={this.setCategory} state={this.state} />;
  }
}

// data
const PRODUCTS = [
  { category: "entertainment", name: "Football" },
  { category: "entertainment", name: "Baseball" },
  { category: "entertainment", name: "Basketball" },
  { category: "fashion", name: "iPod Touch" },
  { category: "design", name: "iPhone 5" },
  { category: "design", name: "Nexus 7" },{ category: "Black", name: "1" },
  { category: "Maroon", name: "2" },
  { category: "Green", name: "3" },
  { category: "Olive", name: "4" },
  { category: "Navy", name: "5" },
  { category: "Purple", name: "6" },
  { category: "Teal", name: "7" },
  { category: "Silver", name: "8" },
  { category: "Grey", name: "9" },
  { category: "Red", name: "10" },
  { category: "Lime", name: "11" },
  { category: "Yellow", name: "12" },
  { category: "Blue", name: "13" },
  { category: "Fuchsia", name: "14" },
  { category: "Aqua", name: "15" },
  { category: "White", name: "16" },
  { category: "Grey0", name: "17" },
  { category: "NavyBlue", name: "18" },
  { category: "DarkBlue", name: "19" },
  { category: "Blue3", name: "20" },
  { category: "Blue3", name: "21" },
  { category: "Blue1", name: "22" },
  { category: "DarkGreen", name: "23" },
  { category: "DeepSkyBlue4", name: "24" },
  { category: "DeepSkyBlue4", name: "25" },
  { category: "DeepSkyBlue4", name: "26" },
  { category: "DodgerBlue3", name: "27" },
  { category: "DodgerBlue2", name: "28" },
  { category: "Green4", name: "29" },
  { category: "SpringGreen4", name: "30" },
  { category: "Turquoise4", name: "31" },
  { category: "DeepSkyBlue3", name: "32" },
  { category: "DeepSkyBlue3", name: "33" },
  { category: "DodgerBlue1", name: "34" },
  { category: "Green3", name: "35" },
  { category: "SpringGreen3", name: "36" },
  { category: "DarkCyan", name: "37" },
  { category: "LightSeaGreen", name: "38" },
  { category: "DeepSkyBlue2", name: "39" },
  { category: "DeepSkyBlue1", name: "40" }
];

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();

ReactDOM.render(
  <Main products={PRODUCTS} productCategories={PRODUCT_CATEGORIES} />,
  document.getElementById("root")
);
