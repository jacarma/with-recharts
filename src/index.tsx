/**
 * @class ExampleComponent
 */

import * as React from "react";

import styles from "./styles.css";
import { LineChart, Line } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <div className={styles.test}>
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}
