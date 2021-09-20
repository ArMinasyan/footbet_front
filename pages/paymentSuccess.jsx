import React from 'react'
import Loader from 'react-loader-spinner'
import queryString from 'query-string'
import { useRouter } from 'next/dist/client/router'
import { request } from '/lib/er.lib';
import { useEffect } from 'react';
import { PAYMENT_SUCCESS } from '../lib/request-destinations';

export default function PaymentSuccess() {
  const router = useRouter()
  useEffect(()=>{
    success()
  }, [])
  async function success() {
    try {
      const token = queryString.parse(location.search).token
      await request(PAYMENT_SUCCESS(token))
      router.push(`/`)
    }
    catch(err){}
  }
  return (
    <div style={{ 
      width: "100vw",
      height: "100vh",
      position:"fixed",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <div>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={30}
          width={30}
          timeout={333000} //3 secs
        />
      </div>
    </div>
  )
}
