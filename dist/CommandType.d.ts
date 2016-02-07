export declare enum CommandType {
    AddConnector = 0,
    AddEdge = 1,
    AddModel = 2,
    AddNode = 3,
    DeleteConnector = 4,
    DeleteEdge = 5,
    DeleteModel = 6,
    DeleteNode = 7,
    SetConnectorProperty = 8,
    SetEdgeProperty = 9,
    SetModelProperty = 10,
    SetNodeProperty = 11,
    DeleteConnectorProperty = 12,
    DeleteEdgeProperty = 13,
    DeleteModelProperty = 14,
    DeleteNodeProperty = 15,
}
export declare class CommandTypes {
    static fromString(com: string): CommandType;
}
