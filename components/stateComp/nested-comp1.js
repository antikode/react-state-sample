import React from "react";

import { ParentContext } from "../../pages/about";

const Nested = () => {
  const { state } = React.useContext(ParentContext);

  return <h2>{state?.count}</h2>;
};

export default Nested;
