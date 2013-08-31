declare class Stack {
    public length: number;
    public st: number[];
    constructor();
    public push(data: number): void;
    public pop(): number;
    public empty(): boolean;
    public size(): number;
    public showAll(): void;
    public top(): number;
}
declare var st: Stack;
