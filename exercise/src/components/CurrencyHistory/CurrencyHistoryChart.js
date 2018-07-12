import React from 'react';
import { TimeSeries } from 'pondjs';
import { Charts, ChartContainer, ChartRow, YAxis, LineChart, Resizable } from 'react-timeseries-charts'

const CurrencyHistoryChart = ({ history }) => {

  if (!history) return null;

  const priceUsd = new TimeSeries({
    name: "priceUsd",
    columns: ["time", "value"],
    points: history.price_usd
  });

  return (
    <Resizable>
      <ChartContainer timeRange={priceUsd.timerange()}>
        <ChartRow height="200">
          <Charts>
            <LineChart axis="axis" series={priceUsd} />
          </Charts>
          <YAxis id="axis" label="Price in USD" min={priceUsd.min()} max={priceUsd.max()} width="80" />
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
}

export default CurrencyHistoryChart
