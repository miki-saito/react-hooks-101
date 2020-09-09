import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.');
  })

  useEffect(() => {
    console.log('This is like componentDidMount.');
  }, [])

  useEffect(() => {
    console.log('This callback is for name only.');
  }, [name])

  // const renderPeriod = () => {
  //   console.log('renderPeriod renders period.');
  //   return '。'
  // }

  return (
    <>
    <p>現在の{name}は、{price}円です。
    {/* {renderPeriod()} */}
    </p>
    <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
    <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
    <button onClick={() => setState(props)}>Reset</button>
    <input value={name}　onChange={e => setState({...state, name: e.target.value })}/>   {/* リセットボタンおよび処理 */}
    </>
  )
}

// リファクタリングなし
// const App = props => {
//   const [state, setState] = useState(props)

//   return (
//     <>
//     <p>現在の{state.name}は、{state.price}円です。</p>
//     <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
//     <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
//     <button onClick={() => setState(props)}>Reset</button>
//     <input value={state.name}　onChange={e => setState({...state, name: e.target.value })}/>   {/* リセットボタンおよび処理 */}
//     </>
//   )
// }

App.defaultProps = {
  name:'',
  price: 1000
}

export default App;