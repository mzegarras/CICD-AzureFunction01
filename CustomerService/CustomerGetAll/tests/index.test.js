const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const rewire = require('rewire');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

let httpFunction = rewire('../index')


var sandbox = sinon.createSandbox();


describe('Customers',()=>{

    let contextFunctions;
    let request;
    let FakeUserServiceClass, convertMessageStub;

    beforeEach(()=>{
        
         //preparar data
         request = {
            query: { name: 'Bill' }
        }
        
        contextFunctions = {
            log: sandbox.stub()
        }

        //preparar mocks,stub,spy
        convertMessageStub = sandbox.stub().returns('fake_string');
        FakeUserServiceClass = sandbox.stub().returns({convertMessage:convertMessageStub});
        httpFunction.__set__('UserService',FakeUserServiceClass);

    });

    afterEach(()=>{
        sandbox.restore();
    });


    context('get',()=>{

        it('should get customer by name',async()=>{
            //preparar data

            //preparar mocks,stub,spy

            //invocar funcionalidad
            await httpFunction(contextFunctions, request);

            expect(contextFunctions.log.callCount).to.equal(1);

            //validar respuesta
            expect(contextFunctions.res.status).to.equal(200);

            expect(contextFunctions.res)
                .to.have.property('body')
                .to.be.a('Object');

            expect(contextFunctions.res.body)
                .to.have.property('message')
                .to.be.a('String')
                .to.equal('fake_string');
            
            expect(contextFunctions.res)
                .to.have.property('headers');

            expect(contextFunctions.res.headers)
                .to.include({ 'Content-Type':'application/json'});

            //validar comportamiento
            expect(FakeUserServiceClass).to.have.been.calledWithNew;
            expect(convertMessageStub).to.have.been.calledWith("Hello, Bill.")

        });


        it('should check for error by emtpy parameters ',async()=>{
            request = {};

            //preparar data

            //preparar mocks,stub,spy

            //invocar funcionalidad
            await httpFunction(contextFunctions, request);

            //validar respuesta
            expect(contextFunctions.res.status).to.equal(400);
            expect(contextFunctions.res).to.have.property('body').to.be.a('Object');
            expect(contextFunctions.res.body).to.have.property('message').to.be.a('String');
            expect(contextFunctions.res.body.message).to.equal('Invalid params');
            expect(contextFunctions.res.body).to.have.property('code').to.be.a('Number');
            expect(contextFunctions.log.callCount).to.equal(1);
            expect(contextFunctions.res.headers).to.include({ 'Content-Type':'application/json'});

             //validar comportamiento
             expect(FakeUserServiceClass).to.not.have.been.called

        });

    });

});