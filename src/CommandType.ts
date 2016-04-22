/**
 * An enum of all types of commands.
 */
export type CommandType = "AddConnectorCommand" | "AddEdgeCommand" | "AddModelCommand" | "AddNodeCommand" | "DeleteConnectorCommand" | "DeleteEdgeCommand" | "DeleteModelCommand" | "DeleteNodeCommand" | "SetConnectorPropertyCommand" | "SetEdgePropertyCommand" | "SetModelPropertyCommand" | "SetNodePropertyCommand" | "DeleteConnectorPropertyCommand" | "DeleteEdgePropertyCommand" | "DeleteModelPropertyCommand" | "DeleteNodePropertyCommand";

/**
 * An enum of all types of commands.
 */
export const CommandType: {
	AddConnector: CommandType,
	AddEdge: CommandType,
	AddModel: CommandType,
	AddNode: CommandType,
	DeleteConnector: CommandType,
	DeleteEdge: CommandType,
	DeleteModel: CommandType,
	DeleteNode: CommandType,
	SetConnectorProperty: CommandType,
	SetEdgeProperty: CommandType,
	SetModelProperty: CommandType,
	SetNodeProperty: CommandType,
	DeleteConnectorProperty: CommandType,
	DeleteEdgeProperty: CommandType,
	DeleteModelProperty: CommandType,
	DeleteNodeProperty: CommandType
} = {
	AddConnector: "AddConnectorCommand" as CommandType,
	AddEdge: "AddEdgeCommandCommand" as CommandType,
	AddModel: "AddModelCommand" as CommandType,
	AddNode: "AddNodeCommand" as CommandType,
	DeleteConnector: "DeleteConnectorCommand" as CommandType,
	DeleteEdge: "DeleteEdgeCommand" as CommandType,
	DeleteModel: "DeleteModelCommand" as CommandType,
	DeleteNode: "DeleteNodeCommand" as CommandType,
	SetConnectorProperty: "SetConnectorPropertyCommand" as CommandType,
	SetEdgeProperty: "SetEdgePropertyCommand" as CommandType,
	SetModelProperty: "SetModelPropertyCommand" as CommandType,
	SetNodeProperty: "SetNodePropertyCommand" as CommandType,
	DeleteConnectorProperty: "DeleteConnectorPropertyCommand" as CommandType,
	DeleteEdgeProperty: "DeleteEdgePropertyCommand" as CommandType,
	DeleteModelProperty: "DeleteModelPropertyCommand" as CommandType,
	DeleteNodeProperty: "DeleteNodePropertyCommand" as CommandType
};
