import * as Common from "cubitt-common";

import {Command} from "./Command";
import {AddCommand} from "./AddCommand";
import {CommandType} from "../CommandType";

/**
 * A command to add a connector to a node
 */
export class AddConnectorCommand extends AddCommand {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the new connector
	 * @param elementType The type of the new connector
	 * @param elementProperties The properties of the new connector
	 * @param nodeId The RFC4122 v4 compliant ID of the node to which the new connector belongs
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid,
		elementType: string,
		elementProperties: Common.Dictionary<any>,
		public nodeId: Common.Guid
	) {
		super(id, requestId, sessionId, CommandType.AddConnector, elementId, elementType, elementProperties);
	}

	/**
	 * @inheritdoc
	 */
	public parse(jsonObject : Object) : Command {
		var obj = super.parseCommand(jsonObject);

		// Validate nodeId
		if (jsonObject['nodeId'] == undefined) {
			throw new Error("Node Identifier is missing");
		}
		var nodeId = Common.Guid.parse(jsonObject['nodeId']);
		if (nodeId == null) {
			throw new Error("Invalid NodeId Identifier format");
		}
		return new AddConnectorCommand(
			<Common.Guid>obj['id'],
			<Common.Guid>obj['requestId'],
			<Common.Guid>obj['sessionId'],
			<Common.Guid>obj['elementId'],
			obj['elementType'].toString(),
			<Common.Dictionary<any>>obj['properties'],
			nodeId
		);
	}
}
