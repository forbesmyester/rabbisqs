/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/tsd.d.ts" />
import { expect } from 'chai';
import getJob from '../index';

describe('a',function() {
    it('b',function() {
        console.log(getJob);
        expect(getJob()).to.eql('hello world');
    });
});
