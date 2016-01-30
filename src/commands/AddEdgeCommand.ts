import * as Common from "cubitt-common";

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
		/**
		 * The RFC4122 v4 compliant ID of the model to which the new edge belongs
		 */
		public modelId: Common.Guid,
		/**
		 * The RFC4122 v4 compliant ID of the connector where the new edge starts
		 */
		public startConnectorId: Common.Guid,
		/**
		 * The RFC4122 v4 compliant ID of the connector where the new edge ends
		 */
		public endConnectorId: Common.Guid
	) {
		super(id, requestId, sessionId, CommandType.AddEdge, elementId, elementType, elementProperties);
	}
}
