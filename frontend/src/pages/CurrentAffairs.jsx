import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { currentAffairsAPI } from '../services/api'
import CurrentAffairsCard from '../components/CurrentAffairsCard'
import '../styles/current-affairs.css'

function CurrentAffairs() {
  const { t, i18n } = useTranslation()
  const [affairs, setAffairs] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('all')

  useEffect(() => {
    fetchAffairs()
  }, [i18n.language])

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

  return (
    <main className="page">
      <div className="container">
        <h1>{t('current_affairs')}</h1>

        <div className="ca-controls">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="politics">Politics</option>
            <option value="economy">Economy</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        <div className="ca-list">
          {loading ? (
            <p>{t('loading')}</p>
          ) : affairs.length > 0 ? (
            affairs.map(affair => (
              <CurrentAffairsCard
                key={affair.id}
                title={affair.title}
                description={affair.description}
                category={affair.category}
                date={affair.date}
                importance={affair.importance}
              />
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
