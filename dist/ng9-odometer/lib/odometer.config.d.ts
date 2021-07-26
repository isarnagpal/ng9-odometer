/**
 * Created by Jose Andres on 6.15.17
 */
export interface Ng9OdometerConfigModel {
    animation?: string;
    format?: string;
    theme?: string;
    value?: number;
    duration?: number;
    auto?: boolean;
}
export declare class Ng9OdometerConfig implements Ng9OdometerConfigModel {
    animation?: string;
    format: string;
    theme?: string;
    value?: number;
    duration?: number;
    auto?: boolean;
}
