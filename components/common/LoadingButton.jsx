import React from 'react'
import Loader from 'react-loader-spinner'

export default function LoadingButton( { loading, children, ...props  } ) {
  return (
    <button {...props} type="submit" style={{ 
      position: 'relative', 
      opacity: loading ? '0.5' : '1', 
      pointerEvents: loading ? `none` : `unset`
    }} >
      { children }
      { 
        loading ? (
          <div style={{ 
            position: `absolute`,
            top: `15px`,
            left: `80px`
          }}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={30}
              width={30}
              timeout={3000} //3 secs
            />
          </div>
        ) :
        <></>
      }
    </button>
  )
}
