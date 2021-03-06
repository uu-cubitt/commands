import * as Common from "cubitt-common";

import {AddCommand} from "./AddCommand";
import {CommandType} from "./../CommandType";

/**
 * A command to add a model to a project.
 */
export class AddModelCommand extends AddCommand {

	/**
	 * Identifier of the parent model
	 */
	public ParentId: Common.Guid;

	/**
	 * @param id The RFC4122 v4 compliant ID of this command.
	 * @param requestId The RFC4122 v4 compliant ID of the request that created this command.
	 * @param sessionId The RFC4122 v4 compliant ID of the session that created this command.
	 * @param elementId The RFC4122 v4 compliant ID of the new model.
	 * @param elementType The type of the new model.
	 * @param elementProperties The properties of the new model.
	 * @param parentId The optional ID of the parent element
	 */
	constructor(
		id: Common.Guid,
		requestId: Common.Guid,
		sessionId: Common.Guid,
		elementId: Common.Guid,
		elementType: string,
		elementProperties: Common.Dictionary<any>,
		parentId?: Common.Guid
	) {
		super(id, requestId, sessionId, CommandType.AddModel, elementId, elementType, elementProperties);
		this.ParentId = parentId;
	}
}
