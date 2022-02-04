import { transformState } from './transformState';

describe('transformState', () => {
  const state = {
    foo: 'bar', name: 'Jim', another: 'one',
  };

  const transforms = [
    {
      operation: 'addProperties', properties: {yet: 'another property'},
    }, 
    {operation: 'clear'},
    {
      operation: 'addProperties', properties: {
        foo: 'bar', name: 'Jim',
      },
    },
  ];

  test('Should work with a long list of operations', () => {
    const result = transformState(state, transforms);

    expect(result).toStrictEqual({
      foo: 'bar', name: 'Jim',
    });
  });

  const state1 = {}; 

  const transforms1 = [
    {
      operation: 'addProperties', properties: { name: 'Jim' },
    },
  ];

  test('Should work with a long list of operations', () => {
    const result = transformState(state1, transforms1);

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

  const state2 = {
    foo: 'bar', name: 'Jim', another: 'one',
  };

  const transforms2 = [
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
  ];

  test('Should work with a long list of operations', () => {
    const result = transformState(state2, transforms2);

    expect(result).toStrictEqual({ 
      foo: 'bar',
    });
  });
});