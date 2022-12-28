import React from "react";

//Utils
import { ParentContext, SET_MESSAGE } from "../../pages/about";

//Components
import Nested from "./nested-comp1";

const ChildrenComp = () => {
  //States ***************************************************************************** //
  const { state, setState } = React.useContext(ParentContext);
  //States ***************************************************************************** //
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setState({
              message: "Change message form child",
              count: state.count + 1,
            });
          }}
        >
          {state?.message} {state?.count}
        </button>
        <Nested />
      </div>
    </div>
  );
};

export default ChildrenComp;
