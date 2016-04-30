import chai = require("chai");
import {CommandType} from "./../CommandType";

let expect = chai.expect;

describe("CommandType tests", () => {
	it("AddEdge should result in true when compared to its string representation", (done) => {
		expect(CommandType.AddEdge).to.deep.equal("AddEdgeCommand");
		done();
	});
	it("AddModel should result in true when compared to its string representation", (done) => {
		expect(CommandType.AddModel).to.deep.equal("AddModelCommand");
		done();
	});
	it("AddNode should result in true when compared to its string representation", (done) => {
		expect(CommandType.AddNode).to.deep.equal("AddNodeCommand");
		done();
	});
	it("DeleteConnector should result in true when compared to its string representation", (done) => {
		expect(CommandType.DeleteConnector).to.deep.equal("DeleteConnectorCommand");
		done();
	});
	it("DeleteEdge should result in true when compared to its string representation", (done) => {
		expect(CommandType.DeleteEdge).to.deep.equal("DeleteEdgeCommand");
		done();
	});
	it("DeleteModel should result in true when compared to its string representation", (done) => {
		expect(CommandType.DeleteModel).to.deep.equal("DeleteModelCommand");
		done();
	});
	it("DeleteNode should result in true when compared to its string representation", (done) => {
		expect(CommandType.DeleteNode).to.deep.equal("DeleteNodeCommand");
		done();
	});
	it("SetConnectorProperty should result in true when compared to its string representation", (done) => {
		expect(CommandType.SetConnectorProperty).to.deep.equal("SetConnectorPropertyCommand");
		done();
	});
	it("SetEdgeProperty should result in true when compared to its string representation", (done) => {
		expect(CommandType.SetEdgeProperty).to.deep.equal("SetEdgePropertyCommand");
		done();
	});
	it("SetModelProperty should result in true when compared to its string representation", (done) => {
		expect(CommandType.SetModelProperty).to.deep.equal("SetModelPropertyCommand");
		done();
	});
	it("SetNodeProperty should result in true when compared to its string representation", (done) => {
		expect(CommandType.SetNodeProperty).to.deep.equal("SetNodePropertyCommand");
		done();
	});
	it("DeleteConnectorProperty should result in true when compared to its string representation", (done) => {
		expect(CommandType.DeleteConnectorProperty).to.deep.equal("DeleteConnectorPropertyCommand");
		done();
	});
	it("DeleteEdgeProperty should result in true when compared to its string representation", (done) => {
		expect(CommandType.DeleteEdgeProperty).to.deep.equal("DeleteEdgePropertyCommand");
		done();
	});
	it("DeleteModelProperty should result in true when compared to its string representation", (done) => {
		expect(CommandType.DeleteModelProperty).to.deep.equal("DeleteModelPropertyCommand");
		done();
	});
	it("DeleteNodeProperty should result in true when compared to its string representation", (done) => {
		expect(CommandType.DeleteNodeProperty).to.deep.equal("DeleteNodePropertyCommand");
		done();
	});
});
