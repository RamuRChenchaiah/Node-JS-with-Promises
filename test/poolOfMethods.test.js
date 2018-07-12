let resourceForTest = require('../poolOfMethods');
let chai = require('chai');
let expect = chai.expect;
const testMessage = "Data as received for this step (1)";
const testMessageInStep2 = "otherManipulatedData";

describe('Test Derived output from pool of methods', function(){
	it("shall return expected output", function(done){
		resourceForTest.pipe().then(function(response){
			expect(response.message).to.be(testMessage)
			expect(response['manipulationsInStep (2)']).to.be(testMessageInStep2);
		});
		done();
	})

	it("shall not return mixed steps' output", function(done){
		resourceForTest.pipe().then(function(response){
			expect(response.message).not.to.be(testMessageInStep2)
			expect(response['manipulationsInStep (2)']).not.to.be(testMessage);
		});
		done();
	})	
})