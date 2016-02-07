/**
 * All possible types of commands
 */
export enum CommandType {
	AddConnector,
	AddEdge,
	AddModel,
	AddNode,
	DeleteConnector,
	DeleteEdge,
	DeleteModel,
	DeleteNode,
	SetConnectorProperty,
	SetEdgeProperty,
	SetModelProperty,
	SetNodeProperty,
	DeleteConnectorProperty,
	DeleteEdgeProperty,
	DeleteModelProperty,
	DeleteNodeProperty
}

export class CommandTypes {
	public static fromString(com : string) : CommandType {
		var com = com.toLowerCase();
		switch(com) {
			case "addconnector":
				return CommandType.AddConnector;
			case "addedge":
				return CommandType.AddEdge;
			case "addmodel":
				return CommandType.AddModel;
			case "addnode":
				return CommandType.AddNode;
			case "deleteconnector":
				return CommandType.DeleteConnector;
			case "deleteedge":
				return CommandType.DeleteEdge;
			case "deletemodel":
				return CommandType.DeleteModel;
			case "deletenode":
				return CommandType.DeleteNode;
			case "setconnectorproperty":
				return CommandType.SetConnectorProperty;
			case "setedgeproperty":
				return CommandType.SetEdgeProperty;
			case "setmodelproperty":
				return CommandType.SetModelProperty;
			case "setnodeproperty":
				return CommandType.SetNodeProperty;
			case "deleteconnectorproperty":
				return CommandType.DeleteConnectorProperty;
			case "deleteedgeproperty":
				return CommandType.DeleteEdgeProperty;
			case "deletemodelproperty":
				return CommandType.DeleteModelProperty;
			case "deletenodeproperty":
				return CommandType.DeleteNodeProperty;
			default:
				throw new Error("Invalid CommandType");
		}
	}
}
