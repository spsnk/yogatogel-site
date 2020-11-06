import React, { useState } from "react"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

const CustomTicker = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Ticker>
          {({ index }) => (
            <>
              <h3>Text ticker #{index}!</h3>
            </>
          )}
        </Ticker>
      )}
    </PageVisibility>
  )
}

export default CustomTicker
