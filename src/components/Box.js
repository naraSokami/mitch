import { useRef } from 'react'

const Box = (props) => {
  console.log('test');
  return (
    <div
      style={{
        width: '100px',
        minHeight: '100px',
        backgroundColor: '#000',
        borderRadius: '20px',
        display: 'flex',
        fontSize: '2rem',
      }}
      className="box"
    >
      <div style={{ margin: 'auto' }}>{props.title}</div>
    </div>
  )
}

export default Box