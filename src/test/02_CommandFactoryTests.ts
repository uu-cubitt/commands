import chai = require("chai");
import * as Commands from "../cubitt-commands";
import * as Common from "cubitt-common"

let expect = chai.expect;

describe("CommandFactory", () => {
	it("should throw an error when provided null", (done) => {
		expect(function() { Commands.CommandFactory.parse(null)}).to.throw(Error);
		done();
	});

	it("should throw an error when provided undefined", (done) => {
		expect(function() { Commands.CommandFactory.parse(undefined)}).to.throw(Error);
		done();
	});

	it("should throw an error when the type is undefined", (done) => {
		let command: Commands.AddConnectorCommand = new Commands.AddConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_CONNECTOR",
			{},
			Common.Guid.newGuid()
		);
		let result: Object = JSON.parse(command.toJson());
		delete result["type"];
		expect(function() { Commands.CommandFactory.parse(result); }).to.throw(Error);
		done();
	});

	it("should throw an error when an Guid is invalid", (done) => {
		let command: Commands.AddConnectorCommand = new Commands.AddConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_CONNECTOR",
			{},
			Common.Guid.newGuid()
		);
		let result: Object = JSON.parse(command.toJson());
		result["elementId"] = "INVALIDGUID";
		expect(function() { Commands.CommandFactory.parse(result); }).to.throw(Error);
		done();
	});

	it("should throw an error when ElementType (string validation) is undefined", (done) => {
		let command: Commands.AddConnectorCommand = new Commands.AddConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_CONNECTOR",
			{},
			Common.Guid.newGuid()
		);
		let result: Object = JSON.parse(command.toJson());
		delete result["elementType"];
		expect(function() { Commands.CommandFactory.parse(result); }).to.throw(Error);
		done();
	});

	it("should throw an error when ElementType (string validation) is empty", (done) => {
		let command: Commands.AddConnectorCommand = new Commands.AddConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_CONNECTOR",
			{},
			Common.Guid.newGuid()
		);
		let result: Object = JSON.parse(command.toJson());
		result["elementType"] = "";
		expect(function() { Commands.CommandFactory.parse(result); }).to.throw(Error);
		done();
	});

	it("should correctly parse an DeleteConnectorCommand", (done) => {
		let command: Commands.DeleteConnectorCommand = new Commands.DeleteConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid()
		);
		let result: Object = JSON.parse(command.toJson());
		result["elementId"] = "invalidguid";
		expect(function() { Commands.CommandFactory.parse(result); }).to.throw(Error);
		done();
	});

	it("should throw an error when properties are null", (done) => {
		let command: Commands.AddConnectorCommand = new Commands.AddConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_CONNECTOR",
			{},
			Common.Guid.newGuid()
		);
		let result: Object = JSON.parse(command.toJson());
		result["elementProperties"] = null;
		let comm: Commands.AddConnectorCommand = <Commands.AddConnectorCommand> Commands.CommandFactory.parse(result);
		expect(comm.elementProperties).to.empty;
		done();
	});

	it("should override properties['type'] when set", (done) => {
		let command: Commands.AddConnectorCommand = new Commands.AddConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_CONNECTOR",
			{"type" : "NOT_TEST_CONNECTOR" },
			Common.Guid.newGuid()
		);
		let result: Object = JSON.parse(command.toJson());
		result["elementProperties"]["type"] = {"test": "NOT_TEST_CONNECTOR"};
		let comm: Commands.AddConnectorCommand = <Commands.AddConnectorCommand> Commands.CommandFactory.parse(result);
		expect(comm.elementProperties).to.empty;
		done();
	});

	it("should correctly parse an AddConnectorCommand", (done) => {
		let command: Commands.AddConnectorCommand = new Commands.AddConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_CONNECTOR",
			{},
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an AddEdgeCommand", (done) => {
		let command: Commands.AddEdgeCommand = new Commands.AddEdgeCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_EDGE",
			{},
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an AddModelCommand", (done) => {
		let command: Commands.AddModelCommand = new Commands.AddModelCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_MODEL",
			{}
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an hierarchical AddModelCommand", (done) => {
		let command: Commands.AddModelCommand = new Commands.AddModelCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_MODEL",
			{},
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an AddNodeCommand", (done) => {
		let command: Commands.AddNodeCommand = new Commands.AddNodeCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"TEST_NODE",
			{},
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an DeleteConnectorCommand", (done) => {
		let command: Commands.DeleteConnectorCommand = new Commands.DeleteConnectorCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an DeleteConnectorPropertyCommand", (done) => {
		let command: Commands.DeleteConnectorPropertyCommand = new Commands.DeleteConnectorPropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an DeleteEdgeCommand", (done) => {
		let command: Commands.DeleteEdgeCommand = new Commands.DeleteEdgeCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an DeleteEdgePropertyCommand", (done) => {
		let command: Commands.DeleteEdgePropertyCommand = new Commands.DeleteEdgePropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an DeleteModelCommand", (done) => {
		let command: Commands.DeleteModelCommand = new Commands.DeleteModelCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an DeleteModelPropertyCommand", (done) => {
		let command: Commands.DeleteModelPropertyCommand = new Commands.DeleteModelPropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an DeleteNodeCommand", (done) => {
		let command: Commands.DeleteNodeCommand = new Commands.DeleteNodeCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an DeleteNodePropertyCommand", (done) => {
		let command: Commands.DeleteNodePropertyCommand = new Commands.DeleteNodePropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an SetConnectorPropertyCommand", (done) => {
		let command: Commands.SetConnectorPropertyCommand = new Commands.SetConnectorPropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property",
			"value"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an SetConnectorPropertyCommand", (done) => {
		let command: Commands.SetConnectorPropertyCommand = new Commands.SetConnectorPropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property",
			"value"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an SetEdgePropertyCommand", (done) => {
		let command: Commands.SetEdgePropertyCommand = new Commands.SetEdgePropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property",
			"value"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an SetModelPropertyCommand", (done) => {
		let command: Commands.SetModelPropertyCommand = new Commands.SetModelPropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property",
			"value"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

	it("should correctly parse an SetNodePropertyCommand", (done) => {
		let command: Commands.SetNodePropertyCommand = new Commands.SetNodePropertyCommand(
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			"property",
			"value"
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

});
