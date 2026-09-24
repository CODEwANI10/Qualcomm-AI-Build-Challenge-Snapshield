// Feature #69 — Dynamic browser page title: SHYEN | N ACTIVE INCIDENTS
import { useEffect } from 'react'

export function usePageTitle(activeCount) {
  useEffect(() => {
    document.title = activeCount > 0
      ? `⚠ SnapShield | ${activeCount} ACTIVE INCIDENT${activeCount !== 1 ? 'S' : ''}`
      : 'SnapShield — On-Device Network Intelligence'
  }, [activeCount])
}
