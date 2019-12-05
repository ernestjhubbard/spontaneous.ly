import React from 'react';

class ActivityFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 3,
      cost: 3,
      distance: 3
    };
    this.zip = this.props.zip;
    this.setFilter = this.props.setFilter;
    this.getFilterCriteria = this.getFilterCriteria.bind(this);

  }

  getFilterCriteria(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container my-5">
        <h4 className="text-center font-weight-bold mb-3">Location: {this.zip}</h4>
        <div className="rounded border p-3">
          <form onSubmit={() => {
            this.setFilter(this.state);
            this.props.history.push('/activity-list');
          }}>
            <div className="form-group">
              <label htmlFor="spontaneity-points" className="text-center d-block">Level of Adventure: {this.state.points}</label>
              <input name="points" type="range" className="custom-range filter-range" min="1" max="5" value={this.state.points} id="spontaneity-points" onChange={this.getFilterCriteria}/>
            </div>
            <div className="form-group">
              <label htmlFor="cost" className="text-center d-block">Cost: {this.state.cost}</label>
              <input name="cost" type="range" className="custom-range filter-range" min="1" max="5" value={this.state.cost} id="cost" onChange={this.getFilterCriteria} />
            </div>
            <div className="form-group">
              <label htmlFor="distance" className="text-center d-block">Distance: {this.state.distance} Miles</label>
              <input name="distance" type="range" className="custom-range filter-range" min="1" max="5" value={this.state.distance} id="distance" onChange={this.getFilterCriteria} />
            </div>
            <div className="submit-div fixed-bottom container py-3">
              <button className="spon-button text-white rounded w-100">Find Adventures</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ActivityFilter;
