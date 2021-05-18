const {describe, it} = require('mocha');
const {assert} = require('chai');

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe("Tests", function() {
    it("powNumber", function() {
        assert.equal(numberOperations.powNumber(1),1)
        assert.equal(numberOperations.powNumber(2),4)
    })
    it("numberChecker", function() {
        
        assert.throw(()=>(numberOperations.numberChecker('a'),Error('The input is not a number!')))
        assert.equal(numberOperations.numberChecker(1),'The number is lower than 100!')
        assert.equal(numberOperations.numberChecker(100),'The number is greater or equal to 100!')
        assert.equal(numberOperations.numberChecker(101),'The number is greater or equal to 100!')
    })
    it('sumArrays', function(){
        test1arr1 = [1,2,3];
        test1arr2=[1,2,3];
        test1result=[2,4,6];
        assert.deepEqual(numberOperations.sumArrays(test1arr1,test1arr2),test1result)

        test2arr1 = [1,2,3,4];
        test2arr2=[1,2,3];
        test2result=[2,4,6,4];
        assert.deepEqual(numberOperations.sumArrays(test2arr1,test2arr2),test2result)

        test3arr1 = [1,2,3];
        test3arr2=[];
        test3result=[1,2,3];
        assert.deepEqual(numberOperations.sumArrays(test3arr1,test3arr2),test3result)

        test4arr1 = [];
        test4arr2=[1,2,3];
        test4result=[1,2,3];
        assert.deepEqual(numberOperations.sumArrays(test4arr1,test4arr2),test4result)

        test5arr1 = [];
        test5arr2=[];
        test5result=[];
        assert.deepEqual(numberOperations.sumArrays(test5arr1,test5arr2),test5result)
    })
})