import React, {Component, Fragment} from "react";

function RenderPullUps()  {
  return (
    <div class="form-group col-6">
      <label>Подтяивания:</label>
      <input type="text" className="col-12 form-control form-control"></input>
    </div>
  )
}

function RenderBars() {
  return (
    <div class="form-group col-6 ">
      <label>Брусья:</label>
      <input type="text" className="col-12 form-control form-control"></input>
    </div>
  )
}

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="row">
              <RenderPullUps />
              <RenderBars />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
