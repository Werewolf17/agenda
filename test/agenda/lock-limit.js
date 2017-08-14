import test from 'ava';
import {Agenda} from '../../lib';
import {beforeEach, afterEach} from '../helpers';

test.beforeEach(beforeEach);
test.afterEach.always(afterEach);

test('returns itself', t => {
  const {agenda} = t.context;

  t.true(agenda.lockLimit(10) instanceof Agenda);
});

test('sets the lockLimit', t => {
  const {agenda} = t.context;

  agenda.lockLimit(10);

  t.is(agenda._lockLimit, 10);
});