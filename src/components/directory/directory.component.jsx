import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "Jackets",
          imageUrl: "https://i.ibb.co/0jqHpnp/jackets.png",
          id: 2,
        },
        {
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/GCCdy8t/sneakers.png",
          id: 3,
        },
        {
          title: "Womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
        },
        {
          title: "Mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
