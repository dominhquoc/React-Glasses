import React, { Component } from "react";
import data from "../data/dataGlasses.json";
import "./Glasses.css";

export default class Glasses extends Component {
  state = {
    productDetail: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderGlass = () => {
    return data.map((glass, index) => {
      return (
        <div className="col-2" key={glass.id}>
        <button
          className="btn"
          key={index}
          onClick={() => {
            this.changeGlass(glass)            
          }}
        >
          <img src={glass.url} className="img-fluid border h-80 w-80" />
        </button>
        </div>
      );
    });
  };
  changeGlass = (sp) => {
    this.setState({
      productDetail: sp,
    });
  };
  render() {
    let { url, name, desc } = this.state.productDetail;
    return (
      <div className="App">
        <div className="shadow">
        <h4 className="title-glass">TRY GLASS APP ONLINE</h4>
        <div className="d-flex justify-content-center">
          <div className="container">
            <div className="row p-4">
              <div className="col-4">
                <div className="img-Left">
                  <img src={url} alt="" />
                  <div className="bg-title-glass">
                    <h3 className="text-title">{name}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
              <div className="col-4">
                <img
                  src="./glassesImage/model.jpg"
                  alt="..."
                  className="img-fluid"
                  style={{height: "400px"}}
                />
              </div>
            </div>
            <div className="row render">
              
              {this.renderGlass()}
             
              </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
