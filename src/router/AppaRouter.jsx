import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppaRouter = () => {
  return (
    <Routes>
        <Route>
            <Route path='/auth/*' element={<AuthRoutes/>} />
            <Route path='/*' element={<JournalRoutes/>} />
        </Route>
    </Routes>
  )
}
