import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { currentAffairsAPI } from '../services/api'
import CurrentAffairsCard from '../components/CurrentAffairsCard'
import '../styles/current-affairs.css'

function CurrentAffairs() {
  const { t, i18n } = useTranslation()
  const [affairs, setAffairs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAffairs = async () => {
      setLoading(true)
      try {
        const response = await currentAffairsAPI.getLatest(i18n.language, 20)
        setAffairs(response.data.currentAffairs)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchAffairs()
  }, [i18n.language])

  return (
    <main className="page">
      <div className="container">
        <h1>{t('current_affairs')}</h1>
        <div className="ca-list">
          {loading ? <p>{t('loading')}</p> : affairs.length > 0 ? (
            affairs.map(affair => (
              <CurrentAffairsCard key={affair.id} title={affair.title} description={affair.description} category={affair.category} date={affair.date} importance={affair.importance} />
            ))
          ) : (
            <p>{t('no_results')}</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default CurrentAffairs
