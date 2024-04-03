import { Component } from "react";

export class Toolbar extends Component {
  render() {
    const filters = this.props.filters
    const selected = this.props.selected

    return (
      <>
        {filters.map(filter => {
            return (
              <div
                className={
                  selected === filter ? "filters-item active" : "filters-item"
                }
                onClick={this.props.onSelectFilter}
              >
                {filter}
              </div>
            );
        })}
      </>
    )
  }
}