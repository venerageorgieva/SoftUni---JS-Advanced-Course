const sumOfTwoNumbers = require('./index.js');
const {assert} = require('chai');

describe('function sumOfTwoNumbers test',()=>{

    it('test with two numbers',()=>{

        assert.equal(sumOfTwoNumbers(3,4),7)

    });
    it('test with string and number',()=>{

        assert.equal(sumOfTwoNumbers('3',4),7)

    });

});