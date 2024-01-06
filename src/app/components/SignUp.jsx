'use client'
//import { useEffect } from 'react';
//import { auth, database } from '../path-to-firebase-file/firebase';
import './signup.css'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import {
  signUpWithEmailAndPassword,
  signUpWithGitHub,
  signUpWithGoogle
} from '../../firebase/signupAuth'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('signup')
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      await signUpWithEmailAndPassword(email, password, name)
      router.push('/myticket')
    } catch (error) {}
  }
  const handleGoogleSignup = async () => {
    try {
      const user = await signUpWithGoogle()
      if (user) {
        router.push('/myticket')
      }
    } catch (error) {
      console.error('Signup failed:', error.message)
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const toggleMode = () => {
    setMode(mode === 'signup' ? 'signin' : 'signup')
  }

  return (
    <div className="signContainer">
      <div className="dot top-left-dot">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
        >
          <g filter="url(#filter0_d_24_318)">
            <circle cx="6.82388" cy="6.70889" r="3.8168" fill="#CD4FF9" />
          </g>
          <defs>
            <filter
              id="filter0_d_24_318"
              x="0.539913"
              y="0.424922"
              width="12.5679"
              height="12.5679"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.23358" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.88235 0 0 0 0 0.5475 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_318" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_24_318"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="dot top-right-dot">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
        >
          <g filter="url(#filter0_d_24_318)">
            <circle cx="6.82388" cy="6.70889" r="3.8168" fill="#CD4FF9" />
          </g>
          <defs>
            <filter
              id="filter0_d_24_318"
              x="0.539913"
              y="0.424922"
              width="12.5679"
              height="12.5679"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.23358" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.88235 0 0 0 0 0.5475 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_318" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_24_318"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="dot bottom-left-dot">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
        >
          <g filter="url(#filter0_d_24_318)">
            <circle cx="6.82388" cy="6.70889" r="3.8168" fill="#CD4FF9" />
          </g>
          <defs>
            <filter
              id="filter0_d_24_318"
              x="0.539913"
              y="0.424922"
              width="12.5679"
              height="12.5679"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.23358" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.88235 0 0 0 0 0.5475 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_318" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_24_318"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="dot bottom-right-dot">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
        >
          <g filter="url(#filter0_d_24_318)">
            <circle cx="6.82388" cy="6.70889" r="3.8168" fill="#CD4FF9" />
          </g>
          <defs>
            <filter
              id="filter0_d_24_318"
              x="0.539913"
              y="0.424922"
              width="12.5679"
              height="12.5679"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.23358" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.88235 0 0 0 0 0.5475 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_318" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_24_318"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="sign-form">
        <div className="switch-btn" onClick={toggleMode}>
          <div className={mode === 'signup' ? 'signup active' : 'signup'}>Signup</div>&nbsp;
          <div className={mode === 'signin' ? 'signin active' : 'signin'}>Signin</div>
        </div>
        {mode === 'signup' && (
          <>
            <p className="NText">Your Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </>
        )}
        <div className="NText">Email</div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <p className="NText">Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="signupbutton" type="submit" onClick={handleSignUp}>
          <p className="SText">Sign up</p>
        </button>
        <button className="extsign" type="submit" onClick={handleGoogleSignup}>
          <div className="GText"> Sign up with Google</div>
        </button>
        <button className="extsign" type="submit" onClick={signUpWithGitHub}>
          <div className="GText">Sign up with Github</div>
        </button>
        <div className="footer">
          Already have an account ? &nbsp; <span> Sign in </span>
        </div>
      </div>
    </div>
  )
}

export default SignUp
