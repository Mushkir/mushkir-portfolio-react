import React, { useEffect } from "react";
import PropTypes from "prop-types";

const PreventPullToRefresh = ({ children }) => {
  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const disablePullToRefresh = (e) => {
      const currentY = e.touches[0].clientY;

      // Prevent pull-to-refresh only when at the top and swiping down
      if (window.scrollY === 0 && currentY > startY) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", disablePullToRefresh, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", disablePullToRefresh);
    };
  }, []);

  return <div style={{ touchAction: "pan-x pan-y" }}>{children}</div>;
};

PreventPullToRefresh.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreventPullToRefresh;
