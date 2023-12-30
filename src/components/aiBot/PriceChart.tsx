import { Box, Grid } from "@mui/material";
import React from "react";

let tvScriptLoadingPromise;

declare global {
  interface Window {
    TradingView: any;
  }
}

export const PriceChart = () => {
  const onLoadScriptRef = React.useRef<(() => void) | null>(null);

  React.useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current(),
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_b2784") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BITGET:BTCUSDT.P",
          interval: "60",
          timezone: "Etc/UTC",
          theme: "white",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          studies: ["STD;RSI"],
          container_id: "tradingview_b2784",
        });
      }
    }
  }, []);

  return (
    <Box
      color="white"
      style={{
        borderRadius: 20,
      
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "10px",
        }}
      >
        <div
          id="tradingview_b2784"
          style={{
            height: "25em",
            width: "100%",
            maxWidth: "500em",
          }}
        />
      </div>
    </Box>
  );
};
