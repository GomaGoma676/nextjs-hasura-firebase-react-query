import { VFC, memo } from 'react'
import { useQueryNews } from '../hooks/useQueryNews'
import { NewsItemMemo } from './NewsItem'

const NewsList: VFC = () => {
  const { status, data } = useQueryNews()
  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>
  return (
    <div>
      {data?.map((news) => (
        <div key={news.id}>
          <ul>
            <NewsItemMemo news={news} />
          </ul>
        </div>
      ))}
    </div>
  )
}
export const NewsListMemo = memo(NewsList)
