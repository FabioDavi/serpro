import assert from 'assert';
import { bank } from './api.mjs'

function soma(a, b) {
    return a + b;
}


assert.equal(soma(2, 2), 4);
assert.equal(bank.operation.sacar(38, 35), 3);