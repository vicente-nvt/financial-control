var Commitment = require("../domain/commitment/commitment");
var Commitment = require("../domain/commitment/commitment");


describe("Commitment tests", () =>{


    it ("should raise error when description is not setted", () => {
        var commitmentDto = { "description": "" };

        var act = () => new Commitment(commitmentDto);

        expect(act).toThrow(new Error("You must enter the description"));
    });
});