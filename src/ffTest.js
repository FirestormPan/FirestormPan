import React, { Component } from "react";
import "./front.css";


class Frontistirio extends Component {
  state = {
    styling: {
      div: {
        backgroundImage: `url(${this.props.frontistiriou.imagePath})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      linktopage: {
        maxWidth: "95px",

      },
      nameLink: {
        cursor: "pointer",
        textAlign: "right",
      }, 
    },  
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.isFavourited(this.props.frontistiriou.id) ? "warning" : "primary";
    return classes;
  }

  render() {
    const { name, description, link, region, id } = this.props.frontistiriou;
    return (
      <div className="front" style={this.state.styling.div}>
        <div className="row ">
          <div className="col-lg-3">
            <button
              className={this.getBadgeClasses()}
              onClick={() => {
                this.props.onFavoutited(id);
              }}
            >
              <i className="far fa-star"></i>
            </button>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-5" style={{ textAlign: "right" }}>
            <h3
              style={this.state.styling.nameLink}
              onClick={() => window.open(link, "_blank")}
            >
              {name}
            </h3>
            <i> {region}</i>
          </div>
        </div>

        <p  className="coverBackgroundOnHover">
          <b>{description}</b>
        </p>

        <a
          href={link}
          target="_blank"
          className="pageButton"
          //className="btn btn-primary pull-right btn-sm "
          style={this.state.styling.linktopage}
        >
          let's go!
        </a>
      </div>
    );
  }
}

export default Frontistirio;
