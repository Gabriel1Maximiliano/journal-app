import React from 'react'
import { AppaRouter } from './router/AppaRouter'
import { AppTheme } from './theme/AppTheme'

export const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <AppaRouter />
      </AppTheme>

    </>
  )
}

