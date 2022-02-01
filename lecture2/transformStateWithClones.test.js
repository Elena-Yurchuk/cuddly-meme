import { transformStateWithClones } from './transformStateWithClones';

describe('tranformStateWithClones', () => {
  test('Should work with a long list of operations', () => {
    const result = transformStateWithClones({
      foo: 'bar', bar: 'foo',
    },
    [
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
    ],
    );

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

  test('Should work with a long list of operations', () => {
    const result = transformStateWithClones({
      foo: 'bar', bar: 'foo',
    },
    [
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
    ],
    );

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

  test('Should work with a long list of operations', () => {
    const result = transformStateWithClones({},
      [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        }, 
      ],
    );

    expect(result).toStrictEqual([
      {name: 'Jim'},
    ],
    );
  });
});