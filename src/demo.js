import React from "react";
import { format } from "d3-format";
import { RadarChart } from "react-vis";

const DATA = [
  {
    name: "Pider",
    cost: 320000,
    crew: 3,
    maxAtmSpeed: 1500,
    HyperDRat: 6,
    MaxMLh: 120,
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
    strokeWidth: 2,
    fill: "#cccccc",
    stroke: 2
  },
  {
    name: "Pider2",
    cost: (320000 / 3) * 2,
    crew: (3 / 3) * 2,
    maxAtmSpeed: (1500 / 3) * 2,
    HyperDRat: (6 / 3) * 2,
    MaxMLh: (120 / 3) * 2,
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
    strokeWidth: 2,
    fill: "#dddddd",
    stroke: 2
  },
  {
    name: "Pider3",
    cost: 320000 / 3.0,
    crew: 3 / 3.0,
    maxAtmSpeed: 1500 / 3,
    HyperDRat: 6 / 3,
    MaxMLh: 120 / 3,
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
    strokeWidth: 2,
    fill: "#eeeeee",
    stroke: 2
  },
  {
    name: "Starship",
    cost: 149999,
    crew: 2,
    maxAtmSpeed: 1050,
    HyperDRat: 5,
    MaxMLh: 100,
    fillOpacity: 0.1,
    strokeOpacity: 0.5,
    strokeWidth: 2,
    fill: "#aaaaaa",
    stroke: 2
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
      hideInnerMostValues={true}
      renderAxesOverPolygons={true}
      style={{
        labels: {
          fontSize: 14,
          textAnchor: "middle",
          fill: "#00ff00"
        },
        polygons: {
          stroke: "coral"
        },
        axes: {
          line: {
            // fill: "black",
            strokeWidth: 2,
            stroke: "coral"
          },
          ticks: {
            // fill: "black",
            strokeWidth: 1,
            stroke: "blue"
          },
          text: {
            fontSize: 10,
            fill: "#0000ff"
          }
        }
      }}
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
          name: "Max ML/h"
        }
      ]}
    />
  );
}
