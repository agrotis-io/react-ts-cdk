import { storiesOf } from "@storybook/react";
import * as React from "react";
import Clock from "./Clock";

storiesOf("Clock", module).add("Clock with Hello World msg", () => (
  <Clock msg="Hello World " />
));
