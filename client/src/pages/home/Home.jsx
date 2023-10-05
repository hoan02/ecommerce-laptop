import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div>
        Sản phẩm
      </div>
      <div className="product-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
