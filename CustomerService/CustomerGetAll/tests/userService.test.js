const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

let sandbox = sinon.createSandbox();
let UserService = require('../UserService')

describe('User Service Test',()=>{

    let userService;

    beforeEach(()=>{
        userService = new UserService();
    })

    afterEach(()=>{
        sandbox.restore();
    });

    context('get',()=>{
        
        it('should return upper case',()=>{
            expect(userService.convertMessage("fooMessage")).to.equal("FOOMESSAGE");
            expect(userService.convertMessage("foo")).to.equal("FOO");
        });

        it('should check for error by emtpy parameters',()=>{

            expect(() => {
                userService.convertMessage()
              }).to.throw('invalid parameters')
        });

    })
});