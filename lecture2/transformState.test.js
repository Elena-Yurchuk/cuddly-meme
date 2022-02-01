import { transformState } from './transformState';

describe('transformState', () => {
  test('Should work with a long list of operations', () => {
    const result = transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      {
        operation: 'addProperties', properties: {yet: 'another property'},
      }, 
      {operation: 'clear'},
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },
    ],
    );

    expect(result).toStrictEqual({
      foo: 'bar', name: 'Jim',
    });
  });

  test('Should work with a long list of operations', () => {
    const result = transformState({},
      [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        },
      ],
    );

    expect(result).toStrictEqual({name: 'Jim'});
  });

  test('Should work with a long list of operations', () => {
    const result = transformState( {
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      { operation: 'clear' },
    ],
  
    );

    expect(result).toStrictEqual({});
  });

  test('Should work with a long list of operations', () => {
    const result = transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      {
        operation: 'removeProperties', properties: ['another'],
      },
      { operation: 'clear' },
      { operation: 'clear' },
      { operation: 'clear' },
      {
        operation: 'addProperties', properties: { yet: 'another property' },
      },
      { operation: 'clear' },
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim', 
        },
      },
      {
        operation: 'removeProperties', properties: ['name', 'hello'],
      },
    ],
  
    );

    expect(result).toStrictEqual({ 
      foo: 'bar',
    });
  });
});