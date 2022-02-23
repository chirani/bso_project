import React from "react";
import { faker } from "@faker-js/faker";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const contentGenerator = (x) => {
  var logg = [];
  for (var i = 0; i < x; i++) {
    logg = [
      ...logg,
      {
        title: faker.lorem.sentence(2),
        description: faker.lorem.sentence(4).substring(0, 25) + "...",
        picsrc:
          "https://picsum.photos/id/" +
          faker.datatype.number({
            min: 1,
            max: 399,
          }) +
          "/300/200",
      },
    ];
  }
  return logg;
};
const compslist = contentGenerator(12).map((comps) => {
  return (
    <Comps
      source={comps.picsrc}
      title={comps.title}
      description={comps.description}
    />
  );
});

function Home() {
  const { user } = React.useContext(UserContext);
  return user.auth ? (
    <div>
      <div className="m-container">{compslist}</div>
    </div>
  ) : (
    <div className="m-container">
      {" "}
      <Link to="/register" className="signup-call">
        Please Click here to Sign UP
      </Link>
    </div>
  );
}

export default Home;

function Comps(props) {
  return (
    <div className="listing">
      <div className="image-container">
        <img src={props.source} alt="" />
      </div>
      <div className="text-container">
        <p className="title">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
