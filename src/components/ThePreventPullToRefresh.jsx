import React, { useEffect } from "react";
import PropTypes from "prop-types";

const PreventPullToRefresh = ({ children }) => {
  useEffect(() => {
    const disablePullToRefresh = (e) => {
      // Prevent default action if the touch move is vertical
      if (e.touches.length > 1 || e.touches[0].clientY > 0) {
        e.preventDefault();
      }
    };

    // Add event listener to the document
    document.addEventListener("touchmove", disablePullToRefresh, {
      passive: false,
    });

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("touchmove", disablePullToRefresh);
    };
  }, []);

  return <div style={{ touchAction: "pan-x" }}>{children}</div>;
};

PreventPullToRefresh.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreventPullToRefresh;
