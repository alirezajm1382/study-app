'use client'
import React from 'react'
import DecryptedText, { DecryptedTextProps } from './DecryptedText'

const DecryptedTextClient: React.FunctionComponent<DecryptedTextProps> = (
  props,
) => {
  return <DecryptedText {...props} />
}

export default DecryptedTextClient
