import React from "react";
import { format } from "d3-format";
import { RadarChart } from "react-vis";

const DATA = [
  {
    name: "Starship",
    cost: 149999,
    crew: 1,

    maxAtmSpeed: 1050,
    HyperDRat: 1,
    MaxMLh: 100
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
const wideFormat = format(".3r");

export default function BasicRadarChart(props) {
  return (
    <RadarChart
      data={DATA}
      tickFormat={t => wideFormat(t)}
      startingAngle={0}
      domains={[
        {
          name: "Cost",
          domain: [0, Range.cost],
          tickFormat: t => `${basicFormat(t / 1000)}`,
          getValue: d => d.cost
        },
        { name: "Crew", domain: [0, Range.Crew], getValue: d => d.crew },
        {
          name: "Max Atm. Speed",
          domain: [0, Range["Max Atm. Speed"]],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.maxAtmSpeed
        },
        {
          name: "HyperD Rat",
          domain: [0, Range["HyperD Rat"]],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.HyperDRat
        },
        {
          name: "Max ML/h",
          domain: [0, Range["Max ML/h"]],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.MaxMLh
        }
      ]}
      width={400}
      height={400}
    />
  );
}
