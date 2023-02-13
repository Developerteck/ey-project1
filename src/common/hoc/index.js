import React, { Suspense } from "react";
import LeftNavBar from "../left-navbar";
import TopNavBar from "../top-navbar";
import ErrorBoundary from "./ErrorBoundary";

function WrapperWithErrorBoundary(
  MainComponent,
  showHeader,
  showLeftNav,
  topNavOption) {
  return (
    <Suspense fallback={<></>}>
      <ErrorBoundary>
        <div style={{ display: "flex" }}>
          {showLeftNav && <LeftNavBar />}
          <div
            className="right-section"
          >
            {showHeader && <TopNavBar navOptions={topNavOption} />}
            <MainComponent />
          </div>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
}

export default WrapperWithErrorBoundary;
