import chai = require("chai");
import {CommandType} from "./../CommandType";

let expect = chai.expect;

describe("CommandType tests", () => {
	it("should result in true when compared to its string representation", (done) => {
		expect(CommandType.AddConnector).to.deep.equal("AddConnectorCommand");
		expect(CommandType.AddEdge).to.deep.equal("AddEdgeCommand");
		expect(CommandType.AddModel).to.deep.equal("AddModelCommand");
		expect(CommandType.AddNode).to.deep.equal("AddNodeCommand");
		expect(CommandType.DeleteConnector).to.deep.equal("DeleteConnectorCommand");
		expect(CommandType.DeleteEdge).to.deep.equal("DeleteEdgeCommand");
		expect(CommandType.DeleteModel).to.deep.equal("DeleteModelCommand");
		expect(CommandType.DeleteNode).to.deep.equal("DeleteNodeCommand");
		expect(CommandType.SetConnectorProperty).to.deep.equal("SetConnectorPropertyCommand");
		expect(CommandType.SetEdgeProperty).to.deep.equal("SetEdgePropertyCommand");
		expect(CommandType.SetModelProperty).to.deep.equal("SetModelPropertyCommand");
		expect(CommandType.SetNodeProperty).to.deep.equal("SetNodePropertyCommand");
		expect(CommandType.DeleteConnectorProperty).to.deep.equal("DeleteConnectorPropertyCommand");
		expect(CommandType.DeleteEdgeProperty).to.deep.equal("DeleteEdgePropertyCommand");
		expect(CommandType.DeleteModelProperty).to.deep.equal("DeleteModelPropertyCommand");
		expect(CommandType.DeleteNodeProperty).to.deep.equal("DeleteNodePropertyCommand");
		done();
	});
});
