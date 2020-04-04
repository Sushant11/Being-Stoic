import {lazy} from 'react'

export const AsyncHome = lazy(() => import('../Home/index'))
export const AsyncQuote = lazy(() => import('../Quote/index'))
export const AsyncNotFound = lazy(() => import('../Exception/NotFoundContainer'))