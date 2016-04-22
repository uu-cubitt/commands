import * as Common from "cubitt-common";

import {AddCommand} from "./AddCommand";
import {CommandType} from "./../CommandType";

/**
 * A command to add a node to a model.
 */
export class AddNodeCommand extends AddCommand {
	/**
	 * The RFC4122 v4 compliant ID of the model to which the new node belongs.
	 */
	public modelId: Common.Guid;

	/**
	 * @param id The RFC4122 v4 compliant ID of this command.
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command.
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command.
	 * @param elementId The RFC4122 v4 compliant ID of the new node.
	 * @param elementType The type of the new node.
	 * @param elementProperties The properties of the new node.
	 * @param modelId The RFC4122 v4 compliant ID of the model to which the new node belongs.
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid,
		elementType: string,
		elementProperties: Common.Dictionary<any>,
		modelId: Common.Guid
	) {
		super(id, requestId, sessionId, CommandType.AddNode, elementId, elementType, elementProperties);
		this.modelId = modelId;
	}
}
