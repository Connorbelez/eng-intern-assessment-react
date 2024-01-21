import { StopWatchController, UseStopWatchProps } from ".";




export interface Resolution {
    divisor: number;
    modulus: number;
}
export interface SwActions {
    start: () => void;
    stop: () => void;
    reset: () => void;
    lap: () => void;
}

export interface StopWatchUIElement {
    darkTheme?: boolean;
    borderColor?: string;
    height?: string;
    width?: string;
    borderRadius?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    color?: string;
    margin?: string;
    padding?: string;
    styles?: React.CSSProperties;
    testId?: string;
    containerStyles?: React.CSSProperties;
}

export type stopWatch = StopWatchController


export {StopWatchController, UseStopWatchProps}