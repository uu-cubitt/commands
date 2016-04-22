import * as chai from "chai";
import {CommandType} from "./../CommandType";

let expect = chai.expect;

describe("CommandType tests", () => {
	it("should result in true when compared to its string representation", (done) => {
		expect(CommandType.AddConnector).to.deep.equal("AddConnectorCommand");
		done();
	});
});