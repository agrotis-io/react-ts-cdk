import * as React from "react";
import { IProps, IState } from "./Clock.types";

export default class Clock extends React.Component<IProps, IState> {
  private timeId: any;
  constructor(props: IProps) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  public componentDidMount(): void {
    this.timeId = setInterval(this.handleTick.bind(this), 1000);
  }

  public tick(): void {
    this.setState({
      date: new Date()
    });
  }
  public componentWillUnmount(): void {
    clearInterval(this.timeId);
  }

  public render(): React.ReactNode {
    const { msg }: IProps = this.props;
    const { date }: IState = this.state;

    return (
      <div>
        <h1>{msg}</h1>
        <h2>It is {date.toLocaleTimeString()}</h2>
      </div>
    );
  }

  private handleTick(): void {
    this.tick();
  }
}
