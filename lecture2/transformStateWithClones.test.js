import { transformStateWithClones } from './transformStateWithClones';

describe('tranformStateWithClones', () => {
  const state = {
    foo: 'bar', bar: 'foo',
  };

  const transforms = [
    {
      operation: 'addProperties', properties: {
        name: 'Jim', hello: 'world',
      },
    }, 
    {
      operation: 'removeProperties', properties: ['bar', 'hello'],
    },
    {
      operation: 'addProperties', properties: {another: 'one'},
    },
  ];

  test('Should work with a long list of operations', () => {
    const result = transformStateWithClones(state, transforms);

    expect(result).toStrictEqual( [
      {
        foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
      },
      {
        foo: 'bar', name: 'Jim',
      },
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
    ],
    );
  });

  test('an object itself should not be modified and must still remain the same', () => {

    expect(state).toStrictEqual({
      foo: 'bar', bar: 'foo',
    });
  });

  const state1 = {
    foo: 'bar', bar: 'foo',
  };

  const transforms1 = [
    {
      operation: 'addProperties', properties: {yet: 'another property'},
    }, 
    {operation: 'clear'},
    {operation: 'clear'},
    {
      operation: 'addProperties', properties: {
        foo: 'bar', name: 'Jim',
      },
    },
  ];

  test('Should work with a long list of operations', () => {
    const result = transformStateWithClones(state1, transforms1);

    expect(result).toStrictEqual([
      {
        foo: 'bar', bar: 'foo', yet: 'another property',
      },
      {},
      {},
      {
        foo: 'bar', name: 'Jim',
      },
    ],
    );
  }); 

  test('an object itself should not be modified and must still remain the same', () => {

    expect(state1).toStrictEqual({
      foo: 'bar', bar: 'foo',
    });
  });

  const state2 = {};

  const transforms2 = [
    {
      operation: 'addProperties', properties: { name: 'Jim' },
    }, 
  ];

  test('Should work with a long list of operations', () => {
    const result = transformStateWithClones(state2, transforms2);

    expect(result).toStrictEqual([
      {name: 'Jim'},
    ],
    );
  });

  test('an object itself should not be modified and must still remain the same', () => {

    expect(state2).toStrictEqual({});
  });
});