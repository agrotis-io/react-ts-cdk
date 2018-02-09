import { shallow } from "enzyme";
import React from "react";
import sinon from "sinon";
import Clock from "./Clock";

function formatDate(date: Date): string {
  return (
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2)
  );
}

describe("Props, state & public methods", () => {
  test("Title message to be 'Hello World!'", () => {
    const wrap: any = shallow(<Clock msg="Hello World!" />);

    expect(wrap.find("h1").text()).toEqual("Hello World!");
  });

  test("Tick function set prop 'date' to current date", () => {
    const wrap: any = shallow(<Clock />);
    wrap.instance().tick();
    expect(formatDate(wrap.update().state("date"))).toEqual(
      formatDate(new Date())
    );
  });

  test("handleTick function to execute tick", () => {
    const wrap: any = shallow(<Clock />);
    wrap.instance().handleTick();
    expect(formatDate(wrap.update().state("date"))).toEqual(
      formatDate(new Date())
    );
  });
});

describe("Life cycle methods", () => {
  test("componentWillUnmount to be called", () => {
    const wrap: any = shallow(<Clock />);
    const willUnmount: sinon.SinonSpy = sinon.spy(
      Clock.prototype,
      "componentWillUnmount"
    );
    wrap.unmount();
    expect(willUnmount.callCount).toEqual(1);
  });
});
