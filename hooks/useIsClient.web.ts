import { useEffect, useState } from 'react'

export const useIsClient = () => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => void setHasMounted(true), [])

  return hasMounted
}
