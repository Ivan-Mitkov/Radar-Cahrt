import React from "react";
import { format } from "d3-format";
import { RadarChart, FlexibleWidthXYPlot } from "react-vis";

const DATA = [
  {
    name: "Starship",
    cost: 149999,
    crew: 1,
    maxAtmSpeed: 1050,
    HyperDRat: 1,
    MaxMLh: 100,
    color: "green"
  }
];
const Range = {
  name: "Starship",
  cost: 320000,
  Crew: 3,

  "Max Atm. Speed": 1500,
  "HyperD Rat": 6,
  "Max ML/h": 120
};

const basicFormat = format(".2r");
const wideFormat = format(".2r");

export default function BasicRadarChart(props) {
  return (
    <RadarChart
      margin={{ left: 60, right: 60, top: 60, bottom: 60 }}
      data={DATA}
      tickFormat={t => wideFormat(t)}
      startingAngle={300}
      width={props.width}
      height={props.height}
      domains={[
        {
          domain: [0, Range.cost],
          tickFormat: t => `${basicFormat(t / 1000)}`,
          getValue: d => d.cost,
          name: "Cost"
        },
        {
          // name: "Crew",

          domain: [0, Range.Crew],
          getValue: d => d.crew,
          name: "Crew"
        },
        {
          // name: "Max Atm. Speed",
          domain: [0, Range["Max Atm. Speed"]],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.maxAtmSpeed,
          name: "Max Atm. Speed"
        },
        {
          // name: "HyperD Rat",
          domain: [0, Range["HyperD Rat"]],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.HyperDRat,
          name: "HyperD Rat"
        },
        {
          // name: "Max ML/h",
          domain: [0, Range["Max ML/h"]],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.MaxMLh,
          name: "HyperD Rat"
        }
      ]}
      style={{
        plot: {
          fill: "white",
          stroke: "green",
          strokeWidth: "5"
        },
        labels: {
          fontSize: 12,
          textAnchor: "middle",
          fill: "#00ff00"
        },
        polygons: {
          fillOpacity: 0.5,
          strokeOpacity: 1,
          strokeWidth: 2,
          fill: "#ff0000"
        },
        line: {
          color: "blue"
        }
        // axes: {
        //   strokeWidth: 2,

        //   line: {

        //     fillOpacity: 0.8,
        //     strokeWidth: 2,
        //     strokeOpacity: 0.8
        //   },
        //   ticks: {
        //     fillOpacity: 1,
        //     strokeOpacity: 0
        //   },
        //   text: {}
        // }
      }}
    />
  );
}
