import { useState } from 'react';
import Katex from './components/Katex'
import Latex from './components/Latex'
import { Button, Popover } from 'antd';
import "./App.css";

function App() {
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false);

  const symbolRender = () => {
    return (
      <Button
        onClick={() => {
          setValue(`${value}$($这三个项目都要出现$)$`)
          setVisible(false)
        }}>
        点击增加 $($这三个项目都要出现$)$
      </Button>
    )
  }

  return (
    <div className="App">

      <figure>
        <Popover
          content={symbolRender}
          title="常用符号"
          trigger="click"
          visible={visible}
          onVisibleChange={(newVisible) => {
            setVisible(newVisible);
          }}
        >
          <Button type="primary">常用符号</Button>
        </Popover>
      </figure>

      <textarea
        placeholder='请输入您的表达式'
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <Katex>{value}</Katex>
      <Latex>{value}</Latex>
    </div>
  )
}

export default App
