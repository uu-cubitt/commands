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
			"TEST_CONNECTOR",
			{},
			Common.Guid.newGuid(),
			Common.Guid.newGuid(),
			Common.Guid.newGuid()
		);
		expect(function() { Commands.CommandFactory.parse(JSON.parse(command.toJson())) }).to.not.throw(Error);
		done();
	});

});
