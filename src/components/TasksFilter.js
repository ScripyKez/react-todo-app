import React from "react"
import PT from "prop-types"

export default class TaskFilter extends React.Component {
  // state = {
  //   tab: "All",
  // }

  handleActive = (e, cb, cb2) => {
    if (
      e.target.tagName === "BUTTON" &&
      e.target.className !== this.props.tab
    ) {
      cb2(e.target.innerHTML)
      cb(e.target.innerHTML)
    }
  }

  render() {
    return (
      <ul
        className="filters"
        onClick={e =>
          this.handleActive(e, this.props.todosFilter, this.props.setTabFunc)
        }
      >
        <li>
          <button className={this.props.tab === "All" ? "selected" : ""}>
            All
          </button>
        </li>
        <li>
          <button className={this.props.tab === "Active" ? "selected" : ""}>
            Active
          </button>
        </li>
        <li>
          <button className={this.props.tab === "Completed" ? "selected" : ""}>
            Completed
          </button>
        </li>
      </ul>
    )
  }
}

TaskFilter.defaultProps = {
  todosFilter: () => {},
  setTabFunc: () => {},
  tab: "All",
}

TaskFilter.propTypes = {
  todosFilter: PT.func.isRequired,
  setTabFunc: PT.func,
  tab: PT.string,
}
