"use strict";

describe("0-module-1-task", function() {

    it("1+1=2", function() {
        expect(sum(1, 1)).toEqual(2);
    });

});

function sum(a,b) {
	return a + b;
}