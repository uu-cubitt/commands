import * as Common from "cubitt-common";

import {Command} from "./Command";
import {AddCommand} from "./AddCommand";
import {CommandType} from "../CommandType";

/**
 * A command to add an edge to a model
 */
export class AddEdgeCommand extends AddCommand {
	/**
	 * @param id The RFC4122 v4 compliant ID of this command
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command
	 * @param elementId The RFC4122 v4 compliant ID of the new edge
	 * @param elementType The type of the new edge
	 * @param elementProperties The properties of the new edge
	 * @param modelId The RFC4122 v4 compliant ID of the model to which the new edge belongs
	 * @param startConnectorId The RFC4122 v4 compliant ID of the starting point of the new edge
	 * @param endConnectorId The RFC4122 v4 compliant ID of the end point of the new edge
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid,
		elementType: string,
		elementProperties: Common.Dictionary<any>,
		public modelId: Common.Guid,
		public startConnectorId: Common.Guid,
		public endConnectorId: Common.Guid
	) {
		super(id, requestId, sessionId, CommandType.AddEdge, elementId, elementType, elementProperties);
	}

	/**
	 * @inheritdoc
	 */
	public parse(jsonObject : Object) : Command {
		var obj = super.parseCommand(jsonObject);

		// Validate modelId
		if (jsonObject['modelId'] == undefined) {
			throw new Error("Model Identifier is missing");
		}
		var modelId = Common.Guid.parse(jsonObject['modelId']);
		if (modelId == null) {
			throw new Error("Invalid ModelId Identifier format");
		}

		// Validate startConnectorId
		if (jsonObject['startConnectorId'] == undefined) {
			throw new Error("StartConnector Identifier is missing");
		}
		var startConnectorId = Common.Guid.parse(jsonObject['startConnectorId']);
		if (startConnectorId == null) {
			throw new Error("Invalid StartConnector Identifier format");
		}

		// Validate endConnectorId
		if (jsonObject['endConnectorId'] == undefined) {
			throw new Error("EndConnector Identifier is missing");
		}
		var endConnectorId = Common.Guid.parse(jsonObject['endConnectorId']);
		if (endConnectorId == null) {
			throw new Error("Invalid EndConnector Identifier format");
		}

		return new AddEdgeCommand(
			<Common.Guid>obj['id'],
			<Common.Guid>obj['requestId'],
			<Common.Guid>obj['sessionId'],
			<Common.Guid>obj['elementId'],
			obj['elementType'].toString(),
			<Common.Dictionary<any>>obj['properties'],
			modelId,
			startConnectorId,
			endConnectorId
		);
	}
}
